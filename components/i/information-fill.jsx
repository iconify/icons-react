import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs93ev7th.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs93ev7th"/>`,
		"fallback": "mingcute:information-fill",
	});
}

export default Component;
