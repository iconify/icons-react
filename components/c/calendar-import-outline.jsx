import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsn6xpbgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsn6xpbgu"/>`,
		"fallback": "mdi:calendar-import-outline",
	});
}

export default Component;
