import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/f/fn1xanb3x.css';
import '../../css/m/mlc26bcmt.css';
import '../../css/c/coerhuaeo.css';
import '../../css/e/euv5qeb4y.css';
import '../../css/j/jzi95mbxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGPhYJMbRr" cx="8.14" cy="11.08" r="20.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path fill="url(#SVGDCUexbkg)" class="fn1xanb3x wm-a"/><path fill="url(#SVGPhYJMbRr)" class="mlc26bcmt wm-k"/><path class="coerhuaeo wm-deco"/><path fill="url(#SVGDCUexbkg)" class="euv5qeb4y wm-deco"/><path class="jzi95mbxb wm-deco"/></g>`,
		"fallback": "withicons-rangoli:forward",
	});
}

export default Component;
