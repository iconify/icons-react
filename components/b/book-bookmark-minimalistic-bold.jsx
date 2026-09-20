import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jrbve4bqj.css';
import '../../css/t/tti9_b1tl.css';
import '../../css/c/cg0pxqb3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jrbve4bqj"/><path class="tti9_b1tl"/><path class="cg0pxqb3g"/></g>`,
		"fallback": "solar:book-bookmark-minimalistic-bold",
	});
}

export default Component;
