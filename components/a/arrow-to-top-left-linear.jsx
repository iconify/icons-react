import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccmgnje9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccmgnje9k"/>`,
		"fallback": "solar:arrow-to-top-left-linear",
	});
}

export default Component;
