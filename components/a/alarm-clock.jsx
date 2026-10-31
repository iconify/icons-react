import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/f/f6yurxbsf.css';
import '../../css/r/r64oswb7g.css';
import '../../css/l/l52llvo_p.css';
import '../../css/w/wavt7cb8r.css';
import '../../css/g/gyytzlc5m.css';
import '../../css/d/drq7qce6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGfTZU7cSa" cx="8.52" cy="8.08" r="20.11" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="f6yurxbsf wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="r64oswb7g wm-a"/><path fill="url(#SVGfTZU7cSa)" class="l52llvo_p wm-k"/><path class="wavt7cb8r wm-shine"/><path class="gyytzlc5m wm-deco"/><path class="drq7qce6b wm-deco"/></g>`,
		"fallback": "withicons-rangoli:alarm-clock",
	});
}

export default Component;
