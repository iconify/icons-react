import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fe3e1imau.css';
import '../../css/l/l0lp-9h1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fe3e1imau secondary"/><path class="l0lp-9h1e primary"/></g>`,
		"fallback": "iconaut:hand-peace-duotone",
	});
}

export default Component;
