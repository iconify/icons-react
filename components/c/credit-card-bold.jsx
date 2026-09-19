import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lyeizkbnf.css';
import '../../css/u/u_34de28v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lyeizkbnf"/><path clip-rule="evenodd" class="u_34de28v"/></g>`,
		"fallback": "glyphs:credit-card-bold",
	});
}

export default Component;
