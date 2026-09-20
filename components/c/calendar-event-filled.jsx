import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/veyi6ibey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="veyi6ibey"/>`,
		"fallback": "tabler:calendar-event-filled",
	});
}

export default Component;
