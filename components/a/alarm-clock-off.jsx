import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/z/zyt2rolgl.css';
import '../../css/z/zulnx7b8l.css';
import '../../css/u/uh6di0wke.css';
import '../../css/a/au020mk4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGBWavPbff" x1="9.37" x2="15.37" y1="1.24" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGBWavPbff)" class="zyt2rolgl"/><path class="wm-a zulnx7b8l"/><path class="uh6di0wke wm-s"/><path class="au020mk4g wm-shine"/></g>`,
		"fallback": "withicons-utsav:alarm-clock-off",
	});
}

export default Component;
