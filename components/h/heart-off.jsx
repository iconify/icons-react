import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/f/f234cc5nq.css';
import '../../css/a/awb1jpbss.css';
import '../../css/n/np_kl38nm.css';
import '../../css/p/p7shhrbbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGnreWddSd" cx="7.64" cy="7.13" r="24.27" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="f234cc5nq wm-shadow"/><path fill="url(#SVGnreWddSd)" class="awb1jpbss wm-k"/><path class="np_kl38nm wm-shine"/><path class="p7shhrbbj wm-s"/></g>`,
		"fallback": "withicons-rangoli:heart-off",
	});
}

export default Component;
