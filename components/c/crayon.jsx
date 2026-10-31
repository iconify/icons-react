import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/e/ezmbqzb6z.css';
import '../../css/e/e2cprsbvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGpcCFeesq" x1="9.9" x2="15.9" y1="3.14" y2="19.07" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGpcCFeesq)" class="ezmbqzb6z"/><path class="e2cprsbvh wm-shine"/></g>`,
		"fallback": "withicons-utsav:crayon",
	});
}

export default Component;
