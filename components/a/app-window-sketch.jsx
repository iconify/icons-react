import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jtpswu7ak.css';
import '../../css/m/mvkcupbgs.css';
import '../../css/u/u_6g3bbkk.css';
import '../../css/c/caxef8g7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jtpswu7ak"/><path class="mvkcupbgs wm-k"/><path class="u_6g3bbkk wm-k"/><path class="caxef8g7p wm-a"/></g>`,
		"fallback": "withicons:app-window-sketch",
	});
}

export default Component;
