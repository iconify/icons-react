import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/l/le8o8d4kd.css';
import '../../css/a/auf5qoblg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="le8o8d4kd"/><path class="auf5qoblg"/></g>`,
		"fallback": "lets-icons:glasses",
	});
}

export default Component;
