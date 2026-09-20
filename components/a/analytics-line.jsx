import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt9l-fdny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt9l-fdny"/>`,
		"fallback": "majesticons:analytics-line",
	});
}

export default Component;
