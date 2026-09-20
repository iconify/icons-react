import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/i/i4ibnvhup.css';
import '../../css/z/z9rgygbob.css';
import '../../css/d/d0-k7hb6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><circle class="i4ibnvhup"/><path class="z9rgygbob"/><path class="d0-k7hb6t"/></g>`,
		"fallback": "lets-icons:img-alt",
	});
}

export default Component;
