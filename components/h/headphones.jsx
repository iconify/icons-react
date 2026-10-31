import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/d/dqf8oqd_y.css';
import '../../css/h/hva1g6byg.css';
import '../../css/h/hiu7bcbjh.css';
import '../../css/m/mm6anmbnu.css';
import '../../css/y/y-7i7la5o.css';
import '../../css/d/d2v3pzbqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG1SszbcCf" cx="7.86" cy="14.65" r="18.88" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="dqf8oqd_y wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="hva1g6byg wm-a"/><path fill="url(#SVG1SszbcCf)" class="hiu7bcbjh wm-k"/><path class="mm6anmbnu wm-shine"/><path class="wm-deco y-7i7la5o"/><path class="d2v3pzbqm wm-deco"/></g>`,
		"fallback": "withicons-rangoli:headphones",
	});
}

export default Component;
