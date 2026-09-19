import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnqm6cc8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnqm6cc8q"/>`,
		"fallback": "flowbite:calendar-month-outline",
	});
}

export default Component;
