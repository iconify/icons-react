import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7e0fac8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7e0fac8l"/>`,
		"fallback": "mingcute:drone-fill",
	});
}

export default Component;
