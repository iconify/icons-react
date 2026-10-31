import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/d/dhds4l0ei.css';
import '../../css/e/e-jv_gbar.css';
import '../../css/y/yx4ke4_rg.css';
import '../../css/o/oq-vjqbbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGr27TQ3ho" x1="9" x2="15" y1="3.51" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGr27TQ3ho)" class="dhds4l0ei"/><path class="e-jv_gbar wm-shine"/><path class="wm-shine yx4ke4_rg"/><path class="oq-vjqbbn wm-shine"/></g>`,
		"fallback": "withicons-utsav:car-front",
	});
}

export default Component;
