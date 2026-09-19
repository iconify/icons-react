import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvax7ob5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvax7ob5z"/>`,
		"fallback": "flowbite:credit-card-plus-outline",
	});
}

export default Component;
