import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y95393_dl.css';
import '../../css/i/i83y3y1nc.css';
import '../../css/x/xfthtjbma.css';
import '../../css/j/jljbt0bgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="y95393_dl"/><path class="i83y3y1nc"/><path class="wm-a xfthtjbma"/><path class="jljbt0bgl wm-s"/></g>`,
		"fallback": "withicons:database-zap",
	});
}

export default Component;
