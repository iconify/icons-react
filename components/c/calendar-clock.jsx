import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i9cg2rj9b.css';
import '../../css/y/ykqnlnbbe.css';
import '../../css/h/hl1gxsb1a.css';
import '../../css/f/f-l8bxkjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="i9cg2rj9b"/><path class="wm-a ykqnlnbbe"/><path class="hl1gxsb1a wm-s"/><path class="f-l8bxkjq wm-s"/></g>`,
		"fallback": "withicons:calendar-clock",
	});
}

export default Component;
