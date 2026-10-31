import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/w/wq_imk0nm.css';
import '../../css/q/q3flsnbqj.css';
import '../../css/h/hc_iy9bit.css';
import '../../css/i/i2bc9o1ku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGJVk3Ybng" x1="9" x2="15" y1="2.01" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGJVk3Ybng)" class="wq_imk0nm"/><path class="q3flsnbqj wm-a"/><path class="hc_iy9bit wm-s"/><path class="i2bc9o1ku wm-shine"/></g>`,
		"fallback": "withicons-utsav:flip-horizontal",
	});
}

export default Component;
