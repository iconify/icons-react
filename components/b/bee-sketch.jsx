import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/me6hq05dp.css';
import '../../css/h/hzh35zb_u.css';
import '../../css/d/df-t2ybaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="me6hq05dp"/><path class="hzh35zb_u wm-k"/><path class="df-t2ybaq wm-a"/></g>`,
		"fallback": "withicons:bee-sketch",
	});
}

export default Component;
