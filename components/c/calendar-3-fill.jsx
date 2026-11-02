import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldg0t_buw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldg0t_buw"/>`,
		"fallback": "mingcute:calendar-3-fill",
	});
}

export default Component;
