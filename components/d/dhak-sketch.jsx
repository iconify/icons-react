import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mc2s-q1px.css';
import '../../css/o/okga0ebte.css';
import '../../css/q/qoj7i61nw.css';
import '../../css/k/k7xullbbh.css';
import '../../css/i/i1jlvbbcb.css';
import '../../css/b/bku8rghaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mc2s-q1px wm-k"/><path class="okga0ebte wm-k"/><path class="qoj7i61nw wm-k"/><path class="k7xullbbh wm-k"/><path class="i1jlvbbcb wm-a"/><path class="bku8rghaj wm-deco"/></g>`,
		"fallback": "withicons:dhak-sketch",
	});
}

export default Component;
