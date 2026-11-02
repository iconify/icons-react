import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6alyac8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6alyac8p"/>`,
		"fallback": "mingcute:calendar-off-line",
	});
}

export default Component;
