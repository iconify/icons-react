import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/t/twiaksp3y.css';
import '../../css/f/fap80u47g.css';
import '../../css/v/v10c58b9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGyGHtFb6S" cx="9.89" cy="7.07" r="18.04" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="twiaksp3y wm-shadow"/><path fill="url(#SVGyGHtFb6S)" class="fap80u47g wm-k"/><path class="v10c58b9w wm-shine"/></g>`,
		"fallback": "withicons-rangoli:drag-handle",
	});
}

export default Component;
