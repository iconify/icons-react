import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvzc5l46x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvzc5l46x"/>`,
		"fallback": "coolicons:calendar-week-fill-round",
	});
}

export default Component;
