import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/q/qr1kgebhh.css';
import '../../css/p/p6dmozp0j.css';
import '../../css/e/e5pzudbmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGwA3lHefF" x1="8.99" x2="14.99" y1="3.02" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGwA3lHefF)" class="qr1kgebhh"/><path class="p6dmozp0j wm-s"/><path class="e5pzudbmf wm-shine"/></g>`,
		"fallback": "withicons-utsav:heading-3",
	});
}

export default Component;
