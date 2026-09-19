import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l_0ole9tf.css';
import '../../css/u/u6gce-6ue.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l_0ole9tf"/><path class="u6gce-6ue"/></g>`,
		"fallback": "bi:dpad",
	});
}

export default Component;
