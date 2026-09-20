import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4kiqwmzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4kiqwmzm"/>`,
		"fallback": "mingcute:grok-fill",
	});
}

export default Component;
