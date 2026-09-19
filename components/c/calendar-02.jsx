import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezf1yo0lb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezf1yo0lb"/>`,
		"fallback": "hugeicons:calendar-02",
	});
}

export default Component;
