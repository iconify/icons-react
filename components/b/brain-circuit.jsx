import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/m/m8zxzq0il.css';
import '../../css/m/m-keo39dh.css';
import '../../css/x/xjvy_jbkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGbeaZHdqt" x1="8.45" x2="14.45" y1="2.92" y2="21.62" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGbeaZHdqt)" class="m8zxzq0il"/><path class="m-keo39dh wm-a"/><path class="wm-shine xjvy_jbkg"/></g>`,
		"fallback": "withicons-utsav:brain-circuit",
	});
}

export default Component;
