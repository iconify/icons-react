import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/a/aayufjbdt.css';
import '../../css/q/q8ub9memq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><ellipse class="aayufjbdt"/><path class="q8ub9memq"/></g>`,
		"fallback": "lets-icons:del-alt",
	});
}

export default Component;
