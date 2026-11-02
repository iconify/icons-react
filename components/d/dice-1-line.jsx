import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g90d3kbzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g90d3kbzt"/>`,
		"fallback": "mingcute:dice-1-line",
	});
}

export default Component;
