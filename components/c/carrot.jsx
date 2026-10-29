import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kqp_we97z.css';
import '../../css/d/domdhwbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kqp_we97z"/><path class="domdhwbzo wm-a"/></g>`,
		"fallback": "withicons:carrot",
	});
}

export default Component;
