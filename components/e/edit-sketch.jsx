import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u5fu4jbmd.css';
import '../../css/i/in4yf-o8i.css';
import '../../css/r/rp2js4ahk.css';
import '../../css/u/u2vb5vkpp.css';
import '../../css/p/plblxfb0l.css';
import '../../css/d/dq546evfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="u5fu4jbmd"/><path class="in4yf-o8i"/><path class="rp2js4ahk wm-k"/><path class="u2vb5vkpp"/><path class="plblxfb0l wm-a"/><path class="dq546evfb wm-a"/></g>`,
		"fallback": "withicons:edit-sketch",
	});
}

export default Component;
