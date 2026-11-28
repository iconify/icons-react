import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mf14blbfg.css';
import '../../css/r/r78-cb2az.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mf14blbfg secondary"/><path class="primary r78-cb2az"/></g>`,
		"fallback": "iconaut:hand-sparkles-duotone",
	});
}

export default Component;
