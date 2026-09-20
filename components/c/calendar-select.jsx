import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd4yb3bvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zd4yb3bvo"/>`,
		"fallback": "mdi:calendar-select",
	});
}

export default Component;
