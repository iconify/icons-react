import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e11fqyecf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e11fqyecf"/>`,
		"fallback": "mingcute:heavy-rain-line",
	});
}

export default Component;
