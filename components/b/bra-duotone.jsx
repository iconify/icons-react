import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c6r--abrk.css';
import '../../css/r/rk5iw_e-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c6r--abrk secondary"/><path class="primary rk5iw_e-c"/></g>`,
		"fallback": "iconaut:bra-duotone",
	});
}

export default Component;
