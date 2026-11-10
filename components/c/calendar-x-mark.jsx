import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcdd04pos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcdd04pos"/>`,
		"fallback": "sidekickicons:calendar-x-mark",
	});
}

export default Component;
