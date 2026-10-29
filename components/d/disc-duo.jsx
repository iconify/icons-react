import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q9j-d88mg.css';
import '../../css/f/fjmcwu-8t.css';
import '../../css/y/yw4fz_b6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="q9j-d88mg"/><path class="fjmcwu-8t wm-a"/><path class="yw4fz_b6b"/></g>`,
		"fallback": "withicons:disc-duo",
	});
}

export default Component;
