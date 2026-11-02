import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-a86tbtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-a86tbtp"/>`,
		"fallback": "mingcute:calendar-plus-2-line",
	});
}

export default Component;
