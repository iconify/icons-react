import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mpy4tabea.css';
import '../../css/t/t8ka7ccve.css';
import '../../css/p/pcsmsxbuw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGznV2abgm)" class="mpy4tabea"/><defs><linearGradient id="SVGznV2abgm" x1="3.002" x2="9.302" y1="3.019" y2="11.914" gradientUnits="userSpaceOnUse"><stop class="t8ka7ccve"/><stop offset="1" class="pcsmsxbuw"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:bookmark-16",
	});
}

export default Component;
