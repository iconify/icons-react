import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbhpq2bil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbhpq2bil"/>`,
		"fallback": "mingcute:alarm-clock-check-fill",
	});
}

export default Component;
