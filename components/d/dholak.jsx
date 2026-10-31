import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qqojqabrr.css';
import '../../css/q/qyn-lwbix.css';
import '../../css/l/lpd0q9new.css';
import '../../css/e/ej1d-tbxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG9Sa0OeMn" cx="7.4" cy="8.14" r="21.87" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="qqojqabrr wm-shadow"/><path fill="url(#SVG9Sa0OeMn)" class="qyn-lwbix wm-k"/><path class="lpd0q9new wm-k"/><path class="ej1d-tbxh wm-shine"/></g>`,
		"fallback": "withicons-rangoli:dholak",
	});
}

export default Component;
