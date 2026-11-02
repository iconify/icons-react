import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb3lsv9dj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb3lsv9dj"/>`,
		"fallback": "mingcute:imac-line",
	});
}

export default Component;
