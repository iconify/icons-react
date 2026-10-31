import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/g/gk0zolwcn.css';
import '../../css/v/v6d91xpji.css';
import '../../css/n/n-d07sb4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGF4b0CeYL" x1="9" x2="15" y1="2.51" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGF4b0CeYL)" class="gk0zolwcn"/><path class="v6d91xpji wm-a"/><path class="n-d07sb4x wm-shine"/></g>`,
		"fallback": "withicons-utsav:download",
	});
}

export default Component;
