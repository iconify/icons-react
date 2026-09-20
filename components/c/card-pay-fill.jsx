import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-1pjfb4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-1pjfb4c"/>`,
		"fallback": "mingcute:card-pay-fill",
	});
}

export default Component;
