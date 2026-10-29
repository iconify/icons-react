import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yt_9kfb3y.css';
import '../../css/e/e_2r2m0ir.css';
import '../../css/o/owvr77b1a.css';
import '../../css/u/uaae7209v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="yt_9kfb3y"/><path class="e_2r2m0ir wm-k"/><path class="owvr77b1a wm-k"/><path class="uaae7209v wm-a"/></g>`,
		"fallback": "withicons:bot-message-square-sketch",
	});
}

export default Component;
