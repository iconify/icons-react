import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwojc847m.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwojc847m"/>`,
		"fallback": "fa7-solid:calendar-day",
	});
}

export default Component;
