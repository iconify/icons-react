import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mblkorodo.css';
import '../../css/r/r72ufmbxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mblkorodo secondary"/><path class="primary r72ufmbxb"/></g>`,
		"fallback": "iconaut:desktop-duotone",
	});
}

export default Component;
