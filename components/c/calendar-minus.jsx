import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/saz0lkb9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="saz0lkb9h"/>`,
		"fallback": "mynaui:calendar-minus",
	});
}

export default Component;
