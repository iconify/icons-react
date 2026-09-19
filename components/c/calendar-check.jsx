import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3cknw6dq.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3cknw6dq"/>`,
		"fallback": "fa6-solid:calendar-check",
	});
}

export default Component;
