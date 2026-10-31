import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/j/j9401duez.css';
import '../../css/l/l5v3_9b6g.css';
import '../../css/g/gv_67eb2t.css';
import '../../css/h/hlwdkacja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGR0lQY4nQ" x1="9" x2="15" y1="5.52" y2="18.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGR0lQY4nQ)" class="j9401duez"/><path class="l5v3_9b6g wm-shine"/><path class="gv_67eb2t wm-shine"/><path class="hlwdkacja wm-shine"/></g>`,
		"fallback": "withicons-utsav:fish",
	});
}

export default Component;
