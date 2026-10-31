import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/d/d7k4vmb4k.css';
import '../../css/f/fxd39wb6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGhh5XoddB" x1="9.01" x2="15.01" y1="6.5" y2="18" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGhh5XoddB)" class="d7k4vmb4k"/><path class="fxd39wb6f wm-shine"/></g>`,
		"fallback": "withicons-utsav:citrus",
	});
}

export default Component;
