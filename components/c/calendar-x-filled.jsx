import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj69l1b3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj69l1b3w"/>`,
		"fallback": "boxicons:calendar-x-filled",
	});
}

export default Component;
