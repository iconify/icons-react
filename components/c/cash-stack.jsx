import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pyrnayb8z.css';
import '../../css/g/ghj4i1b_h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pyrnayb8z"/><path class="ghj4i1b_h"/></g>`,
		"fallback": "bi:cash-stack",
	});
}

export default Component;
