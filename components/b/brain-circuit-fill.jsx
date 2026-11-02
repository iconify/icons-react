import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qax8ljb9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qax8ljb9h"/>`,
		"fallback": "mingcute:brain-circuit-fill",
	});
}

export default Component;
