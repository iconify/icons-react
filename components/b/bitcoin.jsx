import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/m/m2d48-ywm.css';
import '../../css/u/u2qs9fbzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGKZFaRcBZ" x1="7.87" x2="13.87" y1="1.5" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGKZFaRcBZ)" class="m2d48-ywm"/><path class="u2qs9fbzr wm-shine"/></g>`,
		"fallback": "withicons-utsav:bitcoin",
	});
}

export default Component;
