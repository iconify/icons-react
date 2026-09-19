import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-2d8gbdr.css';

const viewBox = {"width":607,"height":696};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-2d8gbdr"/>`,
		"fallback": "ls:building",
	});
}

export default Component;
