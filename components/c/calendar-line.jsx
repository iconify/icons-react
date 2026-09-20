import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i51-s6bzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i51-s6bzx"/>`,
		"fallback": "mingcute:calendar-line",
	});
}

export default Component;
