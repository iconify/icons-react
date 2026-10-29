import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ae-e09b3w.css';
import '../../css/p/p4k_t7lwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ae-e09b3w"/><path class="p4k_t7lwr wm-a"/></g>`,
		"fallback": "withicons:arrow-left-right",
	});
}

export default Component;
