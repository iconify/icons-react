import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/d/dxj4sccnm.css';
import '../../css/j/jh2yhdpba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGBsfO2Y0A" x1="9" x2="15" y1="3.13" y2="20.87" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGBsfO2Y0A)" class="dxj4sccnm"/><path class="jh2yhdpba wm-shine"/></g>`,
		"fallback": "withicons-utsav:drag-handle",
	});
}

export default Component;
