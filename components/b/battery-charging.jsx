import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/o/oqjtdfkaf.css';
import '../../css/e/e5eks4bzm.css';
import '../../css/w/w2083gzqt.css';
import '../../css/n/n0mzzqb3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGk0HOlekM" x1="9" x2="15" y1="3" y2="20.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGk0HOlekM)" class="oqjtdfkaf"/><path class="e5eks4bzm wm-a"/><path class="w2083gzqt wm-s"/><path class="n0mzzqb3h wm-shine"/></g>`,
		"fallback": "withicons-utsav:battery-charging",
	});
}

export default Component;
