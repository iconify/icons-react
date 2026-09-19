import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mj86nfbjt.css';
import '../../css/w/w9_t02b1j.css';
import '../../css/o/osqcjnb_y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mj86nfbjt"/><path clip-rule="evenodd" class="w9_t02b1j"/><path class="osqcjnb_y"/></g>`,
		"fallback": "glyphs:headphones-bold",
	});
}

export default Component;
