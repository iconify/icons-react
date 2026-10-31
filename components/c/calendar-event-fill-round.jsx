import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kiz2rqn2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kiz2rqn2e"/>`,
		"fallback": "coolicons:calendar-event-fill-round",
	});
}

export default Component;
