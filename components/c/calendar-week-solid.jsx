import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd6_-9b4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vd6_-9b4y"/>`,
		"fallback": "flowbite:calendar-week-solid",
	});
}

export default Component;
