import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msy05x8yd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msy05x8yd"/>`,
		"fallback": "mingcute:arrow-right-line",
	});
}

export default Component;
