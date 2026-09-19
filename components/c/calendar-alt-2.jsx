import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6qjrvgox.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6qjrvgox"/>`,
		"fallback": "vs:calendar-alt-2",
	});
}

export default Component;
