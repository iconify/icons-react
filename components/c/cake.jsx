import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/i/i63-dhb0v.css';
import '../../css/h/haaaddcqe.css';
import '../../css/m/m-5n7bcno.css';
import '../../css/n/nht9sdbdo.css';
import '../../css/z/zqwa0hb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGGpGJKckw" x1="9" x2="15" y1="1.52" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGGpGJKckw)" class="i63-dhb0v"/><path class="haaaddcqe wm-a"/><path class="m-5n7bcno wm-shine"/><path class="nht9sdbdo wm-deco"/><path class="wm-deco zqwa0hb4y"/></g>`,
		"fallback": "withicons-utsav:cake",
	});
}

export default Component;
