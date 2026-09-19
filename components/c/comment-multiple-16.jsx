import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qm3j0zb4e.css';
import '../../css/v/vl6s2zbnv.css';
import '../../css/f/fk3i-830m.css';
import '../../css/h/h0zqot9pw.css';
import '../../css/n/npyhkyrja.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qm3j0zb4e"/><path fill="url(#SVGsULjLcUg)" class="vl6s2zbnv"/><defs><radialGradient id="SVGsULjLcUg" cx="0" cy="0" r="1" gradientTransform="rotate(47.09 -1.59 -1.722)scale(21.1415 38.4691)" gradientUnits="userSpaceOnUse"><stop class="fk3i-830m"/><stop offset=".535" class="h0zqot9pw"/><stop offset="1" class="npyhkyrja"/></radialGradient></defs></g>`,
		"fallback": "fluent-color:comment-multiple-16",
	});
}

export default Component;
