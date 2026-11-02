import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltansw_9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltansw_9u"/>`,
		"fallback": "mingcute:fork-spoon-fill",
	});
}

export default Component;
