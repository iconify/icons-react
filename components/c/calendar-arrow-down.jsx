import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0arksbpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0arksbpz"/>`,
		"fallback": "keyline-icons:calendar-arrow-down",
	});
}

export default Component;
