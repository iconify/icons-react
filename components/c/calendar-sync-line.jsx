import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7bmjjbgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7bmjjbgo"/>`,
		"fallback": "mingcute:calendar-sync-line",
	});
}

export default Component;
