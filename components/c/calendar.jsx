import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cf7nx1v6t.css';
import '../../css/m/m6joo21nb.css';
import '../../css/p/pmntusbzh.css';
import '../../css/d/d2_9cjxkq.css';
import '../../css/g/gtq9o0kpn.css';
import '../../css/v/vgbb3tr7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="cf7nx1v6t wm-shadow"/><path class="m6joo21nb"/><path class="pmntusbzh"/><path class="d2_9cjxkq"/><path class="gtq9o0kpn"/><path class="vgbb3tr7b"/></g>`,
		"fallback": "withicons-retro:calendar",
	});
}

export default Component;
