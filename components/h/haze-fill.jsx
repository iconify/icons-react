import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s23ly6bca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s23ly6bca"/>`,
		"fallback": "mingcute:haze-fill",
	});
}

export default Component;
