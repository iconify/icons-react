import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/irha4wb9h.css';
import '../../css/u/uch2m0oxc.css';
import '../../css/m/mslj97efm.css';
import '../../css/q/q7fzkwb4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="irha4wb9h wm-k"/><path class="uch2m0oxc wm-a"/><path class="mslj97efm wm-k"/><path class="q7fzkwb4t wm-a"/></g>`,
		"fallback": "withicons:arrow-left-sketch",
	});
}

export default Component;
