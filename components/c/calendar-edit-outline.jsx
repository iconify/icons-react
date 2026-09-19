import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srulk4bpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srulk4bpq"/>`,
		"fallback": "flowbite:calendar-edit-outline",
	});
}

export default Component;
