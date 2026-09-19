import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex1xpy24k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex1xpy24k"/>`,
		"fallback": "hugeicons:calendar-off",
	});
}

export default Component;
