import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pk375cb2c.css';
import '../../css/r/rnvgfonpn.css';
import '../../css/s/ssx8dqarr.css';
import '../../css/w/wqssnhx9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pk375cb2c wm-k"/><path class="rnvgfonpn wm-a"/><path class="ssx8dqarr wm-k"/><path class="wm-a wqssnhx9o"/></g>`,
		"fallback": "withicons:arrow-up-right-sketch",
	});
}

export default Component;
