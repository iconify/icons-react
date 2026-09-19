import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru4zkgb9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ru4zkgb9h"/>`,
		"fallback": "flowbite:calendar-plus-solid",
	});
}

export default Component;
