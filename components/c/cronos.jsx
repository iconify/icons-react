import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mn7k6nzcn.css';
import '../../css/c/cpuhaibpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mn7k6nzcn"/><path class="cpuhaibpt"/>`,
		"fallback": "token:cronos",
	});
}

export default Component;
