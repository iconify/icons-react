import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/u/umavfybxr.css';
import '../../css/d/d7hpeu53x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGVXoCGDWH" x1="9" x2="15" y1="2.1" y2="21.89" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGVXoCGDWH)" class="umavfybxr"/><path class="d7hpeu53x wm-shine"/></g>`,
		"fallback": "withicons-utsav:atom",
	});
}

export default Component;
