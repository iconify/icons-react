import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tojc858qr.css';
import '../../css/d/dpy41yb4l.css';
import '../../css/s/stflcpnkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tojc858qr"/><path class="dpy41yb4l"/><path class="stflcpnkh"/></g>`,
		"fallback": "streamline-cyber-color:camera-video-off-2",
	});
}

export default Component;
