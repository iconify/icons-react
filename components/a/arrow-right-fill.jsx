import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub0s4ex6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ub0s4ex6d"/>`,
		"fallback": "mingcute:arrow-right-fill",
	});
}

export default Component;
