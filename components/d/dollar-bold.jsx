import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dxjm8ebzj.css';
import '../../css/k/kp0_j35as.css';
import '../../css/l/l04og0udn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dxjm8ebzj"/><path class="kp0_j35as"/><path clip-rule="evenodd" class="l04og0udn"/></g>`,
		"fallback": "solar:dollar-bold",
	});
}

export default Component;
