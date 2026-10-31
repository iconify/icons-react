import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/j/j4b582bvc.css';
import '../../css/x/x41-bzb1x.css';
import '../../css/n/nxoofqw6z.css';
import '../../css/v/vqi9l6bmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGNAtBfbbw" x1="9" x2="15" y1="2.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGNAtBfbbw)" class="j4b582bvc"/><path class="wm-shine x41-bzb1x"/><path class="nxoofqw6z wm-deco"/><path class="vqi9l6bmz wm-deco"/></g>`,
		"fallback": "withicons-utsav:gift",
	});
}

export default Component;
