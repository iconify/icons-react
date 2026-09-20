import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzu-h2-ey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzu-h2-ey"/>`,
		"fallback": "mingcute:calendar-time-add-fill",
	});
}

export default Component;
