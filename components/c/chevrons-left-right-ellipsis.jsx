import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbaotfb4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbaotfb4q"/>`,
		"fallback": "hugeicons:chevrons-left-right-ellipsis",
	});
}

export default Component;
