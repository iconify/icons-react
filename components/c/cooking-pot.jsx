import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/z/zo-rcsfqh.css';
import '../../css/s/semx1-b3o.css';
import '../../css/x/x226j-tkq.css';
import '../../css/x/x-znb1blp.css';
import '../../css/d/d1e0p1bsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGGEfKRbwY" x1="9" x2="15" y1="2.51" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGGEfKRbwY)" class="zo-rcsfqh"/><path class="semx1-b3o wm-a"/><path class="wm-shine x226j-tkq"/><path class="wm-shine x-znb1blp"/><path class="d1e0p1bsz wm-shine"/></g>`,
		"fallback": "withicons-utsav:cooking-pot",
	});
}

export default Component;
