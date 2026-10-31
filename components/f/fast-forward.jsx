import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/t/thea4pjsx.css';
import '../../css/x/xnq5uub9h.css';
import '../../css/i/ic7cddctb.css';
import '../../css/j/j4o7ss1im.css';
import '../../css/f/f9zy4p92x.css';
import '../../css/v/vcxh8abyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGjT3yGb2I" cx="14.98" cy="7.86" r="16.23" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="thea4pjsx wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="wm-a xnq5uub9h"/><path fill="url(#SVGjT3yGb2I)" class="ic7cddctb wm-k"/><path class="j4o7ss1im wm-shine"/><path class="f9zy4p92x wm-deco"/><path class="vcxh8abyu wm-deco"/></g>`,
		"fallback": "withicons-rangoli:fast-forward",
	});
}

export default Component;
