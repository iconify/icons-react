import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdh9m0b9e.css';

const viewBox = {"width":1024,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdh9m0b9e"/>`,
		"fallback": "whh:handpinch",
	});
}

export default Component;
