import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vkifygbeq.css';
import '../../css/v/vs3_2yq5q.css';
import '../../css/z/zbms0lbwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vkifygbeq"/><path class="vs3_2yq5q wm-a"/><path class="zbms0lbwh"/></g>`,
		"fallback": "withicons:flag-duo",
	});
}

export default Component;
