import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f0jo1sayc.css';
import '../../css/m/mp2an_e3g.css';
import '../../css/n/nd_fneb4o.css';
import '../../css/j/jlp-ovbkm.css';
import '../../css/w/wm1y2mbyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f0jo1sayc wm-k"/><path class="mp2an_e3g wm-a"/><path class="nd_fneb4o wm-shadow"/><path class="jlp-ovbkm wm-k"/><path class="wm-a wm1y2mbyi"/></g>`,
		"fallback": "withicons:brain-circuit-engrave",
	});
}

export default Component;
