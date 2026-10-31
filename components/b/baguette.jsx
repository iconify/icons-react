import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/p/pnu846n5p.css';
import '../../css/b/b_k9_mb_e.css';
import '../../css/w/whzmh64zl.css';
import '../../css/v/v80tojbfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGcPgCpoDF" x1="9" x2="15" y1="1.74" y2="22.25" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGcPgCpoDF)" class="pnu846n5p"/><path class="b_k9_mb_e wm-shine"/><path class="whzmh64zl wm-shine"/><path class="v80tojbfc wm-shine"/></g>`,
		"fallback": "withicons-utsav:baguette",
	});
}

export default Component;
