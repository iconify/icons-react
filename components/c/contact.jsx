import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/z/zx6g7vrds.css';
import '../../css/b/bvsaoacgi.css';
import '../../css/o/ol13s5b_n.css';
import '../../css/s/sqdrkr9kk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGdSVONocx" x1="9" x2="15" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGdSVONocx)" class="zx6g7vrds"/><path class="bvsaoacgi wm-shine"/><path class="ol13s5b_n wm-shine"/><path class="sqdrkr9kk wm-shine"/></g>`,
		"fallback": "withicons-utsav:contact",
	});
}

export default Component;
