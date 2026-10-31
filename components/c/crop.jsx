import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/b/buc4fvbfl.css';
import '../../css/a/axu_edc8f.css';
import '../../css/i/ibivjdktl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGssztEN0r" cx="7.42" cy="6.18" r="26.47" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="buc4fvbfl wm-shadow"/><path fill="url(#SVGssztEN0r)" class="axu_edc8f wm-k"/><path class="ibivjdktl wm-shine"/></g>`,
		"fallback": "withicons-rangoli:crop",
	});
}

export default Component;
