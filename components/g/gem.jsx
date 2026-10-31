import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/j/j7ucld9bf.css';
import '../../css/b/b0flgab8j.css';
import '../../css/c/ctt204bfq.css';
import '../../css/g/ge8hs0bhk.css';
import '../../css/g/ghigxm-bk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG79IORbxr" cx="8.3" cy="8.05" r="20.69" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="j7ucld9bf wm-deco"/><path fill="url(#SVGDCUexbkg)" class="b0flgab8j wm-deco"/><path class="ctt204bfq wm-shadow"/><path fill="url(#SVG79IORbxr)" class="ge8hs0bhk wm-k"/><path class="ghigxm-bk wm-shine"/></g>`,
		"fallback": "withicons-rangoli:gem",
	});
}

export default Component;
