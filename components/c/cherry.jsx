import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/w/wlpwzw4po.css';
import '../../css/z/zgn1bsbxc.css';
import '../../css/j/jjix9w4pe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGRNspUdTW" x1="8.75" x2="14.75" y1="1.34" y2="21.98" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGRNspUdTW)" class="wlpwzw4po"/><path class="wm-a zgn1bsbxc"/><path class="jjix9w4pe wm-shine"/></g>`,
		"fallback": "withicons-utsav:cherry",
	});
}

export default Component;
