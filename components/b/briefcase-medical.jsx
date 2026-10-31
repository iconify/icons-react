import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/k/kyt69jbde.css';
import '../../css/c/c98ig1y1j.css';
import '../../css/a/avg1fabjh.css';
import '../../css/e/e2x4pwbni.css';
import '../../css/c/ck4glob4q.css';
import '../../css/w/wsy5loboz.css';
import '../../css/o/oedosmbgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGGo3KweZv" x1="9.01" x2="15.01" y1="2.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGGo3KweZv)" class="kyt69jbde"/><path class="c98ig1y1j wm-a"/><path class="avg1fabjh wm-shine"/><path class="e2x4pwbni wm-shine"/><path class="ck4glob4q wm-shine"/><path class="wm-shine wsy5loboz"/><path class="oedosmbgb wm-shine"/></g>`,
		"fallback": "withicons-utsav:briefcase-medical",
	});
}

export default Component;
