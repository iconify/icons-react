import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/d/df2ekccfc.css';
import '../../css/j/jjpuy1b7w.css';
import '../../css/c/c1f_ceb8d.css';
import '../../css/f/fz9kbv51l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGZKFl8qTw" x1="9" x2="15" y1="3" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGZKFl8qTw)" class="df2ekccfc"/><path class="jjpuy1b7w wm-shine"/><path class="c1f_ceb8d wm-shine"/><path class="fz9kbv51l wm-shine"/></g>`,
		"fallback": "withicons-utsav:chocolate-box",
	});
}

export default Component;
