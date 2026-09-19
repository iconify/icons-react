import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w5j8-yb1j.css';
import '../../css/l/l3_c0ac3l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w5j8-yb1j"/><path class="l3_c0ac3l"/></g>`,
		"fallback": "bi:bookmark-heart",
	});
}

export default Component;
