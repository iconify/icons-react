import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u_anthadu.css';
import '../../css/p/p1zj69bwt.css';
import '../../css/w/w5y8lebkd.css';
import '../../css/a/a0j3l762m.css';
import '../../css/q/qum0vnbsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="u_anthadu wm-k"/><path class="p1zj69bwt wm-a"/><path class="w5y8lebkd wm-shadow"/><path class="a0j3l762m wm-k"/><path class="qum0vnbsk wm-a"/></g>`,
		"fallback": "withicons:corner-up-left-engrave",
	});
}

export default Component;
