import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh6xjib1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh6xjib1i"/>`,
		"fallback": "boxicons:calendar-check-filled",
	});
}

export default Component;
