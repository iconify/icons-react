import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/x/xoqsz2tyc.css';
import '../../css/l/lq7582b_b.css';
import '../../css/l/li5zgk4su.css';
import '../../css/f/fz5esyb2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGvyQ5ZdHo" x1="8.99" x2="14.99" y1="2" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGvyQ5ZdHo)" class="xoqsz2tyc"/><path class="lq7582b_b wm-shine"/><path class="li5zgk4su wm-shine"/><path class="fz5esyb2l wm-shine"/></g>`,
		"fallback": "withicons-utsav:blocks",
	});
}

export default Component;
