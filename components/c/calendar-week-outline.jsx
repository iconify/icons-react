import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_lvhkbyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_lvhkbyq"/>`,
		"fallback": "flowbite:calendar-week-outline",
	});
}

export default Component;
