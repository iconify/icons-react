import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2wqd55dp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2wqd55dp"/>`,
		"fallback": "bx:bx-bar-chart-alt",
	});
}

export default Component;
