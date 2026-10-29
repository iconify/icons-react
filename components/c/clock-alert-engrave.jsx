import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yfsgak1nr.css';
import '../../css/r/rw26rbc-b.css';
import '../../css/k/kdv-sub3q.css';
import '../../css/h/hmp16njeg.css';
import '../../css/f/f78e21b0t.css';
import '../../css/j/j3l-vfqkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k yfsgak1nr"/><path class="rw26rbc-b wm-s"/><path class="kdv-sub3q wm-shadow"/><path class="hmp16njeg wm-k"/><path class="f78e21b0t wm-a"/><path class="j3l-vfqkm wm-s"/></g>`,
		"fallback": "withicons:clock-alert-engrave",
	});
}

export default Component;
