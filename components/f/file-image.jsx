import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/t/tfsdih5pq.css';
import '../../css/x/x1pejduvh.css';
import '../../css/p/pv7ts8muc.css';
import '../../css/n/n0syzybio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGdSVONocx" x1="9" x2="15" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGdSVONocx)" class="tfsdih5pq"/><path class="wm-shine x1pejduvh"/><path class="pv7ts8muc wm-shine"/><path class="n0syzybio wm-shine"/></g>`,
		"fallback": "withicons-utsav:file-image",
	});
}

export default Component;
