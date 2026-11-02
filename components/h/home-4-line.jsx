import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl7lqyb1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sl7lqyb1e"/>`,
		"fallback": "mingcute:home-4-line",
	});
}

export default Component;
