import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hchn5jvhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hchn5jvhg"/>`,
		"fallback": "mingcute:book-2-line",
	});
}

export default Component;
