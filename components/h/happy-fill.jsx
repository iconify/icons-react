import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elqg70krt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elqg70krt"/>`,
		"fallback": "mingcute:happy-fill",
	});
}

export default Component;
