import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/k/klvibrubj.css';
import '../../css/u/uvbup9qnc.css';
import '../../css/j/j0kr2cbjy.css';
import '../../css/p/p4yhfjbgl.css';
import '../../css/c/cdji361ss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGTmEhAwAQ" x1="9" x2="15" y1="1.52" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGTmEhAwAQ)" class="klvibrubj"/><path class="uvbup9qnc wm-a"/><path class="j0kr2cbjy wm-shine"/><path class="p4yhfjbgl wm-shine"/><path class="cdji361ss wm-shine"/></g>`,
		"fallback": "withicons-utsav:ice-cream",
	});
}

export default Component;
