import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/s/sr7jjuzvn.css';
import '../../css/q/q5g56acvq.css';
import '../../css/f/f-vhapb4e.css';
import '../../css/u/ur0jw-bna.css';
import '../../css/c/cw5zkdfkp.css';
import '../../css/p/p1c1nmbjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGrmsRfdpY" cx="7.86" cy="4.21" r="20.94" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="sr7jjuzvn wm-shadow"/><path fill="url(#SVGrmsRfdpY)" class="q5g56acvq wm-k"/><path fill="url(#SVGDCUexbkg)" class="f-vhapb4e wm-a"/><path class="ur0jw-bna wm-shine"/><path class="cw5zkdfkp wm-deco"/><path class="p1c1nmbjz wm-deco"/></g>`,
		"fallback": "withicons-rangoli:cloud-lightning",
	});
}

export default Component;
