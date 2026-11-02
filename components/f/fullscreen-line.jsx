import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhp8iwb9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhp8iwb9t"/>`,
		"fallback": "mingcute:fullscreen-line",
	});
}

export default Component;
