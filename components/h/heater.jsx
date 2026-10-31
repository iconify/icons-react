import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bh-zo_bta.css';
import '../../css/v/vs66lghsv.css';
import '../../css/m/mwbfq23fk.css';
import '../../css/n/n7_x-bbav.css';
import '../../css/w/wf86nh86b.css';
import '../../css/p/pbvnsxbvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="bh-zo_bta wm-shadow"/><path class="vs66lghsv wm-shadow"/><path class="mwbfq23fk"/><path class="n7_x-bbav"/><path class="wf86nh86b"/><path class="pbvnsxbvh wm-s"/></g>`,
		"fallback": "withicons-brutal:heater",
	});
}

export default Component;
