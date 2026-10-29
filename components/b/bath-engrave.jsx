import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/ckbpelxgi.css';
import '../../css/i/ijhjfcc9c.css';
import '../../css/n/nrdn18act.css';
import '../../css/u/ukw3xqbut.css';
import '../../css/q/qj10p8mvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ckbpelxgi wm-k"/><path class="ijhjfcc9c wm-a"/><path class="nrdn18act wm-shadow"/><path class="ukw3xqbut wm-k"/><path class="qj10p8mvv wm-a"/></g>`,
		"fallback": "withicons:bath-engrave",
	});
}

export default Component;
