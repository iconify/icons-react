import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w_fpdcj6b.css';
import '../../css/l/lkix1qbxu.css';
import '../../css/a/adcbc-90t.css';
import '../../css/y/ygf27xb8p.css';
import '../../css/m/mwp7nvb4q.css';
import '../../css/a/aeen8d4ug.css';
import '../../css/g/gjz397udr.css';
import '../../css/v/vxiu23giz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGvjQzfbSa" cx="9.95" cy="5.71" r="17.28" gradientUnits="userSpaceOnUse"><stop offset="0" class="w_fpdcj6b"/><stop offset=".24" class="lkix1qbxu"/><stop offset=".66" class="lkix1qbxu"/><stop offset="1" class="adcbc-90t"/></radialGradient></defs><path class="wm-shadow ygf27xb8p"/><path fill="url(#SVGvjQzfbSa)" class="mwp7nvb4q wm-k"/><path class="aeen8d4ug wm-k"/><path class="gjz397udr wm-a"/><path class="vxiu23giz wm-shine"/></g>`,
		"fallback": "withicons-rangoli:avatar-baby",
	});
}

export default Component;
