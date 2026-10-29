import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xe5z6mstv.css';
import '../../css/y/yab-qjc4s.css';
import '../../css/j/j_co9j11q.css';
import '../../css/d/du_xhybiq.css';
import '../../css/p/pd6es9u_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xe5z6mstv"/><path class="wm-k yab-qjc4s"/><path class="j_co9j11q wm-k"/><path class="du_xhybiq wm-k"/><path class="pd6es9u_u wm-a"/></g>`,
		"fallback": "withicons:avatar-penguin-sketch",
	});
}

export default Component;
