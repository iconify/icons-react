import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/p/ppyl17b7m.css';
import '../../css/u/uh6di0wke.css';
import '../../css/b/blebzyy1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGv4ZRxbFH" x1="9.03" x2="15.03" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGv4ZRxbFH)" class="ppyl17b7m"/><path class="uh6di0wke wm-s"/><path class="blebzyy1x wm-shine"/></g>`,
		"fallback": "withicons-utsav:cloud-off",
	});
}

export default Component;
