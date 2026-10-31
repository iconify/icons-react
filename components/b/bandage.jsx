import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/x/x3cno-bok.css';
import '../../css/w/wd47ggbtm.css';
import '../../css/a/ahxqh7bnx.css';
import '../../css/p/pvnkt9btq.css';
import '../../css/f/fg2pfrbee.css';
import '../../css/e/eisppitgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGyO4eCbIq" cx="7.47" cy="6.23" r="26.22" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="wm-shadow x3cno-bok"/><path fill="url(#SVGDCUexbkg)" class="wd47ggbtm wm-a"/><path fill="url(#SVGyO4eCbIq)" class="ahxqh7bnx wm-k"/><path class="pvnkt9btq wm-deco"/><path fill="url(#SVGDCUexbkg)" class="fg2pfrbee wm-deco"/><path class="eisppitgv wm-deco"/></g>`,
		"fallback": "withicons-rangoli:bandage",
	});
}

export default Component;
