import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbpzq3urk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbpzq3urk"/>`,
		"fallback": "mingcute:calendar-fill",
	});
}

export default Component;
