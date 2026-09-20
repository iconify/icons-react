import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/awoarn9md.css';
import '../../css/u/u0xqjq4ej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="awoarn9md"/><path class="u0xqjq4ej"/></g>`,
		"fallback": "solar:braces-bold",
	});
}

export default Component;
