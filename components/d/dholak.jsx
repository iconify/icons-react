import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/r/rrp7qjbkg.css';
import '../../css/i/ix58e6hbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGLwdHtcnF" x1="8.81" x2="14.81" y1="5" y2="19" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGLwdHtcnF)" class="rrp7qjbkg"/><path class="ix58e6hbg wm-shine"/></g>`,
		"fallback": "withicons-utsav:dholak",
	});
}

export default Component;
