import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yioqpyb0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yioqpyb0z"/>`,
		"fallback": "coolicons:car-side-round",
	});
}

export default Component;
