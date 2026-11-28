import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o29_ehb9n.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o29_ehb9n"/>`,
		"fallback": "pullo:calendar-clock-bold",
	});
}

export default Component;
