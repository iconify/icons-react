import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/k/kcpf8w6ul.css';
import '../../css/f/fkmo8rb2k.css';
import '../../css/u/uc594cbfd.css';
import '../../css/x/xkaeprbcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG3oKHlbMK" cx="7.34" cy="8.58" r="22.01" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path fill="url(#SVGDCUexbkg)" class="kcpf8w6ul wm-a"/><path fill="url(#SVG3oKHlbMK)" class="fkmo8rb2k wm-k"/><path class="uc594cbfd wm-deco"/><path class="wm-deco xkaeprbcb"/></g>`,
		"fallback": "withicons-rangoli:code",
	});
}

export default Component;
