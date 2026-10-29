import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dlbdyuest.css';
import '../../css/e/ej5oers_e.css';
import '../../css/w/wimjzab2b.css';
import '../../css/u/ukq3os1_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="dlbdyuest wm-k"/><path class="ej5oers_e wm-a"/><path class="wimjzab2b"/><path class="ukq3os1_u"/></g>`,
		"fallback": "withicons-bauhaus:git-graph",
	});
}

export default Component;
