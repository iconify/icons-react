import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fzzq1qbts.css';
import '../../css/f/fnhpvhadu.css';
import '../../css/q/q_0am-9er.css';
import '../../css/m/m2ebxhp-u.css';
import '../../css/o/oainz1w_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fzzq1qbts wm-k"/><path class="fnhpvhadu wm-s"/><path class="q_0am-9er wm-shadow"/><path class="m2ebxhp-u wm-k"/><path class="oainz1w_v wm-s"/></g>`,
		"fallback": "withicons:cloud-check-engrave",
	});
}

export default Component;
