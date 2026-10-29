import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h9c6-6b9c.css';
import '../../css/t/towxrt7ua.css';
import '../../css/h/ho37u6b_q.css';
import '../../css/h/hqkt4rbrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="h9c6-6b9c wm-k"/><path class="towxrt7ua wm-k"/><path class="ho37u6b_q wm-a"/><path class="hqkt4rbrv wm-a"/></g>`,
		"fallback": "withicons:chevrons-down-sketch",
	});
}

export default Component;
