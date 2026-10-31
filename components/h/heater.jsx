import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/f/fcpat-b3k.css';
import '../../css/c/cu82y-bni.css';
import '../../css/s/sxv2gyy6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGchgunbrl" x1="9" x2="15" y1=".5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGchgunbrl)" class="fcpat-b3k"/><path class="cu82y-bni wm-s"/><path class="sxv2gyy6j wm-shine"/></g>`,
		"fallback": "withicons-utsav:heater",
	});
}

export default Component;
