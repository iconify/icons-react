import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/v/vdi9_bc0x.css';
import '../../css/f/fyz61giag.css';
import '../../css/v/v_2vwnbes.css';
import '../../css/b/bq9_rfbgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGybOmKc9b" cx="7.6" cy="6.4" r="25.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="vdi9_bc0x wm-shadow"/><path fill="url(#SVGybOmKc9b)" class="fyz61giag wm-k"/><path class="v_2vwnbes wm-a"/><path class="bq9_rfbgb wm-shine"/></g>`,
		"fallback": "withicons-rangoli:check-square",
	});
}

export default Component;
