import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/u/uz270abmp.css';
import '../../css/y/y26dfm_kv.css';
import '../../css/a/a0h6akbrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG2A4jpeUB" x1="9.25" x2="15.25" y1="2.01" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG2A4jpeUB)" class="uz270abmp"/><path class="wm-a y26dfm_kv"/><path class="a0h6akbrb wm-shine"/></g>`,
		"fallback": "withicons-utsav:chart-bar-horizontal",
	});
}

export default Component;
