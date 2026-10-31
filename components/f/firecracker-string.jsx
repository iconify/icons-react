import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/r/r3e5a2oho.css';
import '../../css/d/d3avt_bgd.css';
import '../../css/h/hulgj1bnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGciDAPcRj" x1="9" x2="15" y1="1" y2="22.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGciDAPcRj)" class="r3e5a2oho"/><path class="d3avt_bgd wm-s"/><path class="hulgj1bnk wm-shine"/></g>`,
		"fallback": "withicons-utsav:firecracker-string",
	});
}

export default Component;
