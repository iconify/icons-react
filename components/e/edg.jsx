import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9teu93od.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9teu93od"/>`,
		"fallback": "cryptocurrency:edg",
	});
}

export default Component;
