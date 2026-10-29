import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/d_pf6lbxf.css';
import '../../css/f/fcut-hbnn.css';
import '../../css/f/fyw5h8ktk.css';
import '../../css/q/qllxogbek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="d_pf6lbxf"/><path class="fcut-hbnn wm-a"/><path class="fyw5h8ktk wm-k"/><path class="qllxogbek wm-a"/></g>`,
		"fallback": "withicons:columns-3-sketch",
	});
}

export default Component;
