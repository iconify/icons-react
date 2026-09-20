import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrluncc8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrluncc8l"/>`,
		"fallback": "typcn:arrow-move-outline",
	});
}

export default Component;
