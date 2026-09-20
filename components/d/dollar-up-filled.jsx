import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kusce6b_a.css';
import '../../css/f/f1s9qgbpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kusce6b_a"/><path clip-rule="evenodd" class="f1s9qgbpa"/></g>`,
		"fallback": "reicon:dollar-up-filled",
	});
}

export default Component;
