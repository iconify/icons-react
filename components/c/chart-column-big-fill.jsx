import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-_a2ccer.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-_a2ccer"/>`,
		"fallback": "mingcute:chart-column-big-fill",
	});
}

export default Component;
