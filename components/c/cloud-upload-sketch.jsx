import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f2muu1bnt.css';
import '../../css/p/pnyxl532q.css';
import '../../css/u/uqh-4c7rl.css';
import '../../css/n/npzunlt5o.css';
import '../../css/i/ik3xy0-cl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f2muu1bnt"/><path class="pnyxl532q wm-k"/><path class="uqh-4c7rl wm-k"/><path class="npzunlt5o wm-s"/><path class="ik3xy0-cl wm-s"/></g>`,
		"fallback": "withicons:cloud-upload-sketch",
	});
}

export default Component;
