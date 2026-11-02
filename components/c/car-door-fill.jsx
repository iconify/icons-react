import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k37aljltl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k37aljltl"/>`,
		"fallback": "mingcute:car-door-fill",
	});
}

export default Component;
