import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tk223ccsq.css';
import '../../css/h/h7-01hbkm.css';
import '../../css/l/l24f3obhv.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/g/gwt5kac8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="tk223ccsq wm-k"/><path class="h7-01hbkm wm-a"/><path class="l24f3obhv wm-shadow"/><path class="wm-k yw4fz_b6b"/><path class="gwt5kac8n wm-a"/></g>`,
		"fallback": "withicons:contrast-engrave",
	});
}

export default Component;
