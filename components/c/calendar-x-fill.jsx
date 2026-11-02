import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4h2r2a0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4h2r2a0z"/>`,
		"fallback": "mingcute:calendar-x-fill",
	});
}

export default Component;
