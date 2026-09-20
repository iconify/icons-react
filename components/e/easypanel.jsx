import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzfasvb_b.css';
import '../../css/p/p6fgs4blu.css';
import '../../css/j/jrtb88b6m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG0TSqzboP" x1="395.338" x2="116.737" y1="293.742" y2="776.302" gradientTransform="translate(0 -279)" gradientUnits="userSpaceOnUse"><stop offset="0" class="tzfasvb_b"/><stop offset="1" class="p6fgs4blu"/></linearGradient><path fill="url(#SVG0TSqzboP)" class="jrtb88b6m"/>`,
		"fallback": "selfhst:easypanel",
	});
}

export default Component;
