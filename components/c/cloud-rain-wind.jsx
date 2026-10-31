import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/x/xb4x5cbhm.css';
import '../../css/g/gwg1lei6a.css';
import '../../css/i/ie1_8pz5l.css';
import '../../css/a/aj9z9ub3y.css';
import '../../css/e/e6zgitvsr.css';
import '../../css/j/jcydkub8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGrmsRfdpY" cx="7.86" cy="4.21" r="20.94" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="wm-shadow xb4x5cbhm"/><path fill="url(#SVGDCUexbkg)" class="gwg1lei6a wm-a"/><path fill="url(#SVGrmsRfdpY)" class="ie1_8pz5l wm-k"/><path class="aj9z9ub3y wm-shine"/><path class="e6zgitvsr wm-deco"/><path class="jcydkub8p wm-deco"/></g>`,
		"fallback": "withicons-rangoli:cloud-rain-wind",
	});
}

export default Component;
