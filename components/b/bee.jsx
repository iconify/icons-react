import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/u/ubyi1yiep.css';
import '../../css/r/r_hirgwzh.css';
import '../../css/y/y8fo62brj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGfcXDTb2L" x1="9" x2="15" y1="1.51" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGfcXDTb2L)" class="ubyi1yiep"/><path class="r_hirgwzh wm-a"/><path class="wm-shine y8fo62brj"/></g>`,
		"fallback": "withicons-utsav:bee",
	});
}

export default Component;
