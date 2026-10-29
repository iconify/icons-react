import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w2b8v5scy.css';
import '../../css/r/rrys0abxb.css';
import '../../css/r/rwcpqoa8u.css';
import '../../css/u/uxv7f4b_y.css';
import '../../css/y/y6pe4bckh.css';
import '../../css/c/cmpkjnb0y.css';
import '../../css/d/dx7k_3bea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="w2b8v5scy wm-k"/><path class="rrys0abxb wm-a"/><path class="rwcpqoa8u wm-shadow"/><path class="uxv7f4b_y wm-k"/><path class="wm-k y6pe4bckh"/><path class="cmpkjnb0y wm-k"/><path class="dx7k_3bea wm-a"/></g>`,
		"fallback": "withicons:atom-engrave",
	});
}

export default Component;
