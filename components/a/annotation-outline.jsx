import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjocmgb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjocmgb9w"/>`,
		"fallback": "flowbite:annotation-outline",
	});
}

export default Component;
