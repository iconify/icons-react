import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t97j7k4tz.css';
import '../../css/w/wxgkmbcpg.css';
import '../../css/s/s-9-v86id.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t97j7k4tz"><path class="wxgkmbcpg"/><path class="s-9-v86id"/></g>`,
		"fallback": "lets-icons:chat-alt-2-duotone-line",
	});
}

export default Component;
