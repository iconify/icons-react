import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vgn90vbzq.css';
import '../../css/q/qrlq0qbok.css';
import '../../css/q/q9vrskbqf.css';
import '../../css/o/ou91-ob5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vgn90vbzq"/><path class="qrlq0qbok wm-k"/><path class="q9vrskbqf wm-a"/><path class="ou91-ob5b wm-a"/></g>`,
		"fallback": "withicons:circle-arrow-up-sketch",
	});
}

export default Component;
