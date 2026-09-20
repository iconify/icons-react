import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il-4v9blf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il-4v9blf"/>`,
		"fallback": "mdi:head-thinking-outline",
	});
}

export default Component;
