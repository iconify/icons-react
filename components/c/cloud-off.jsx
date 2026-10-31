import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/f/fwzvr4bdz.css';
import '../../css/e/ez6ommshv.css';
import '../../css/i/ikkjf_bwd.css';
import '../../css/p/p7shhrbbj.css';
import '../../css/w/wlo2z2v-g.css';
import '../../css/n/nqrq7rbor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG4DbnMbDf" cx="7.5" cy="8.2" r="23.01" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="fwzvr4bdz wm-shadow"/><path fill="url(#SVG4DbnMbDf)" class="ez6ommshv wm-k"/><path class="ikkjf_bwd wm-shine"/><path class="p7shhrbbj wm-s"/><path class="wlo2z2v-g wm-deco"/><path class="nqrq7rbor wm-deco"/></g>`,
		"fallback": "withicons-rangoli:cloud-off",
	});
}

export default Component;
