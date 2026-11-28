import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqqnc8b8i.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqqnc8b8i"/>`,
		"fallback": "pullo:calendar-clock-light",
	});
}

export default Component;
