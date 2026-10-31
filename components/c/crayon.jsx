import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/y/yc4k1quus.css';
import '../../css/q/qsi1a_6lr.css';
import '../../css/r/rfscfcctu.css';
import '../../css/c/c4ljxny1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG6iFs6VHE" cx="9.42" cy="6.68" r="20.11" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="wm-shadow yc4k1quus"/><path fill="url(#SVG6iFs6VHE)" class="qsi1a_6lr wm-k"/><path class="rfscfcctu wm-deco"/><path class="c4ljxny1l wm-deco"/></g>`,
		"fallback": "withicons-rangoli:crayon",
	});
}

export default Component;
