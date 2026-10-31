import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/n/n9swn3ujc.css';
import '../../css/a/ad-i-iunx.css';
import '../../css/t/t-xx_qbnt.css';
import '../../css/f/f_70m9l8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGbKbg3c5x" x1="9" x2="15" y1="2.5" y2="21.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGbKbg3c5x)" class="n9swn3ujc"/><path class="ad-i-iunx wm-shine"/><path class="t-xx_qbnt wm-shine"/><path class="f_70m9l8f wm-shine"/></g>`,
		"fallback": "withicons-utsav:beef",
	});
}

export default Component;
