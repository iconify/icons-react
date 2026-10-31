import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/p/pkr1ccc3n.css';
import '../../css/l/lcf-nus3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGGp2Q0dBo" x1="9" x2="15" y1="4.01" y2="20" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGGp2Q0dBo)" class="pkr1ccc3n"/><path class="lcf-nus3g wm-shine"/></g>`,
		"fallback": "withicons-utsav:arrow-right-to-line",
	});
}

export default Component;
