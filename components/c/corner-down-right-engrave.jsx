import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/oxa8kyfga.css';
import '../../css/j/jvw0w5byh.css';
import '../../css/v/vghekgbcn.css';
import '../../css/i/izx2oobri.css';
import '../../css/u/u8_zcib_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="oxa8kyfga wm-k"/><path class="jvw0w5byh wm-a"/><path class="vghekgbcn wm-shadow"/><path class="izx2oobri wm-k"/><path class="u8_zcib_q wm-a"/></g>`,
		"fallback": "withicons:corner-down-right-engrave",
	});
}

export default Component;
