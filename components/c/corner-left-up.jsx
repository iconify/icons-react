import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/o/ogumcjbmt.css';
import '../../css/k/knzusab6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="ogumcjbmt"/><path class="knzusab6p"/></g>`,
		"fallback": "humbleicons:corner-left-up",
	});
}

export default Component;
