import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_h_jpbwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_h_jpbwl"/>`,
		"fallback": "mingcute:chart-column-increasing-line",
	});
}

export default Component;
