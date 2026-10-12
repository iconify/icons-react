import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/atcx97b7d.css';
import '../../css/t/tzfasvb_b.css';
import '../../css/p/p6fgs4blu.css';

const viewBox = {"width":245,"height":245};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGFaEBJ8GQ)" clip-rule="evenodd" class="atcx97b7d"/><defs><linearGradient id="SVGFaEBJ8GQ" x1="188.72" x2="56.03" y1="6.61" y2="236.44" gradientUnits="userSpaceOnUse"><stop class="tzfasvb_b"/><stop offset="1" class="p6fgs4blu"/></linearGradient></defs></g>`,
		"fallback": "thesvg-color:easypanel",
	});
}

export default Component;
