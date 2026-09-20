import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kubfo7bqh.css';
import '../../css/b/bgrfgdkoo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kubfo7bqh"/><path class="bgrfgdkoo"/></g>`,
		"fallback": "reicon:image-plus-filled",
	});
}

export default Component;
