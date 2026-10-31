import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/g/g5_oa6b2g.css';
import '../../css/o/ot68-h25l.css';
import '../../css/j/jvn9tdbuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG25BhreeH" x1="8.77" x2="14.77" y1="2.29" y2="20.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG25BhreeH)" class="g5_oa6b2g"/><path class="ot68-h25l wm-a"/><path class="jvn9tdbuz wm-shine"/></g>`,
		"fallback": "withicons-utsav:cricket",
	});
}

export default Component;
