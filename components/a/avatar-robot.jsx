import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/g/gc8u-db0t.css';
import '../../css/t/t67h1-lsr.css';
import '../../css/o/oqh1t1bhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGwxNfnbOT" x1="9" x2="15" y1="1.76" y2="21.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGwxNfnbOT)" class="gc8u-db0t"/><path class="t67h1-lsr wm-a"/><path class="oqh1t1bhg wm-shine"/></g>`,
		"fallback": "withicons-utsav:avatar-robot",
	});
}

export default Component;
