import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sfh0ngpzs.css';
import '../../css/q/q-j_s-bsp.css';
import '../../css/v/vh4_jvb7b.css';
import '../../css/j/jofkexr8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sfh0ngpzs"/><path class="q-j_s-bsp wm-shadow"/><path class="vh4_jvb7b"/><path class="jofkexr8t"/></g>`,
		"fallback": "withicons:hand-engrave",
	});
}

export default Component;
