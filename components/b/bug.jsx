import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/i/i75pdjr_e.css';
import '../../css/f/feci6vbnd.css';
import '../../css/l/l19fm_s3n.css';
import '../../css/i/ikvzcobwa.css';
import '../../css/d/d9ht7c3dm.css';
import '../../css/i/i0itsu56j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGX8oNwFbq" cx="7.64" cy="8.8" r="23.37" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="i75pdjr_e wm-shadow"/><path fill="url(#SVGX8oNwFbq)" class="feci6vbnd wm-k"/><path fill="url(#SVGDCUexbkg)" class="l19fm_s3n wm-a"/><path class="ikvzcobwa wm-shine"/><path class="d9ht7c3dm wm-deco"/><path class="i0itsu56j wm-deco"/></g>`,
		"fallback": "withicons-rangoli:bug",
	});
}

export default Component;
