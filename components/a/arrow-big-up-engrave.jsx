import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q4an57b1a.css';
import '../../css/m/mpw01vvnx.css';
import '../../css/h/hv_jolb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="q4an57b1a"/><path class="mpw01vvnx wm-shadow"/><path class="hv_jolb_e"/></g>`,
		"fallback": "withicons:arrow-big-up-engrave",
	});
}

export default Component;
