import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb4av0pjs.css';
import '../../css/f/fbeq_z80i.css';
import '../../css/s/sn0nu19vb.css';
import '../../css/o/oeanpsbtb.css';
import '../../css/y/ya2m3abom.css';
import '../../css/c/c9y5aqt1t.css';
import '../../css/j/jg_5p6v-t.css';
import '../../css/y/y7e-_gl6h.css';
import '../../css/y/yc45-nbzk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGTO9Tcd6q" cx="0" cy="0" r="1" gradientTransform="rotate(66 -7108.57 2274.67)scale(93.5072 -374.0284)" gradientUnits="userSpaceOnUse"><stop offset="0" class="pb4av0pjs"/><stop offset="1" class="fbeq_z80i"/></radialGradient></defs><g transform="matrix(2.4 0 0 2.4 16 16)"><path class="sn0nu19vb"/><path fill="url(#SVGTO9Tcd6q)" transform="matrix(1.00064 0 0 -1.00064 2248.311 7948.496)" class="oeanpsbtb"/><path class="ya2m3abom"/><path class="c9y5aqt1t"/><path class="jg_5p6v-t"/><path class="y7e-_gl6h"/><ellipse class="yc45-nbzk"/></g>`,
		"fallback": "xero-emoji:face-with-crossed-out-eyes",
	});
}

export default Component;
