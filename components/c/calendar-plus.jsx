import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eaiw91bcc.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eaiw91bcc"/>`,
		"fallback": "fa7-solid:calendar-plus",
	});
}

export default Component;
