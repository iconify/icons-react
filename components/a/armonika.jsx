import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hg_grmkvh.css';
import '../../css/d/dbqm-jn-m.css';
import '../../css/h/hhc9f-bbi.css';
import '../../css/f/fhljezbtx.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/e/ev4uscbvn.css';

const viewBox = {"width":150,"height":150};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect fill="url(#SVGPlJiKcPs)" class="hg_grmkvh"/><rect class="dbqm-jn-m"/><path class="hhc9f-bbi"/><path class="fhljezbtx"/><defs><linearGradient id="SVGPlJiKcPs" x1="75" x2="75" y1="0" y2="247" gradientUnits="userSpaceOnUse"><stop class="vc--wpv5i"/><stop offset="1" class="ev4uscbvn"/></linearGradient></defs></g>`,
		"fallback": "thesvg-color:armonika",
	});
}

export default Component;
