import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/q/qv8hrobkd.css';
import '../../css/j/j_w8s1o1j.css';
import '../../css/t/tp592hbpe.css';
import '../../css/c/c0oe6llju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGFQvzzcMD" x1="9" x2="15" y1="3.76" y2="21.75" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGFQvzzcMD)" class="qv8hrobkd"/><path class="j_w8s1o1j wm-shine"/><path class="tp592hbpe wm-shine"/><path class="c0oe6llju wm-shine"/></g>`,
		"fallback": "withicons-utsav:avatar-bear",
	});
}

export default Component;
