import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/iqflaeb-i.css';
import '../../css/u/u7w6s54ki.css';
import '../../css/g/gv_0dkbnc.css';
import '../../css/y/yadlqnbvi.css';
import '../../css/n/ntzvg7bwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="iqflaeb-i"/><path class="u7w6s54ki wm-k"/><path class="gv_0dkbnc wm-s"/><path class="wm-k yadlqnbvi"/><path class="ntzvg7bwe wm-s"/></g>`,
		"fallback": "withicons:heart-off-sketch",
	});
}

export default Component;
