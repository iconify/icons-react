import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ip_0edc5o.css';
import '../../css/u/ug0vhz7ls.css';
import '../../css/m/mwb07vbdz.css';
import '../../css/f/f2iz_pbwp.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/n/nledv4hdh.css';
import '../../css/w/wt084rcvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ip_0edc5o wm-k"/><path class="ug0vhz7ls wm-a"/><path class="mwb07vbdz wm-shadow"/><path class="f2iz_pbwp wm-k"/><path class="d3y9mw6db wm-k"/><path class="nledv4hdh wm-a"/><path class="wm-a wt084rcvt"/></g>`,
		"fallback": "withicons:avatar-woman-engrave",
	});
}

export default Component;
