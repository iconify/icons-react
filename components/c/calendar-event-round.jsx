import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1c_djb8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1c_djb8s"/>`,
		"fallback": "coolicons:calendar-event-round",
	});
}

export default Component;
