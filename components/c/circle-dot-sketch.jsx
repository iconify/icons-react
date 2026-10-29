import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vgn90vbzq.css';
import '../../css/q/qrlq0qbok.css';
import '../../css/e/ede8hbb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vgn90vbzq"/><path class="qrlq0qbok wm-k"/><path class="ede8hbb4d wm-a"/></g>`,
		"fallback": "withicons:circle-dot-sketch",
	});
}

export default Component;
