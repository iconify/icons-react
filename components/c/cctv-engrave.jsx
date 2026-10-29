import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vte2xfbes.css';
import '../../css/a/aq-4x7bqm.css';
import '../../css/j/j_29mjbsq.css';
import '../../css/i/ipr557bpu.css';
import '../../css/d/db38wxdje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vte2xfbes wm-k"/><path class="aq-4x7bqm wm-a"/><path class="j_29mjbsq wm-shadow"/><path class="ipr557bpu wm-k"/><path class="db38wxdje wm-a"/></g>`,
		"fallback": "withicons:cctv-engrave",
	});
}

export default Component;
