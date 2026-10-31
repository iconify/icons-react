import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/o/oxzj-xzox.css';
import '../../css/w/wfgx0md1d.css';
import '../../css/d/d9dxb2b7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGR2NHYd6O" x1="9" x2="15" y1="2.5" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGR2NHYd6O)" class="oxzj-xzox"/><path class="wfgx0md1d wm-a"/><path class="d9dxb2b7a wm-shine"/></g>`,
		"fallback": "withicons-utsav:headset",
	});
}

export default Component;
