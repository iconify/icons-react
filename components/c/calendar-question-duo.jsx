import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2wl57bbu.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k4-c7ob6h.css';
import '../../css/w/w7_mhrwuu.css';
import '../../css/r/r0mxpjbot.css';
import '../../css/g/g9fpyg3_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary w2wl57bbu"/><g class="dt0cm9dhy primary"><path class="k4-c7ob6h"/><path class="w7_mhrwuu"/><path class="r0mxpjbot"/><path class="g9fpyg3_r"/></g>`,
		"fallback": "iconaut:calendar-question-duo",
	});
}

export default Component;
