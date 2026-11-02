import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avwo5dbio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avwo5dbio"/>`,
		"fallback": "mingcute:filter-line",
	});
}

export default Component;
