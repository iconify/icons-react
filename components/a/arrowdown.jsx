import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de0ny6bst.css';

const viewBox = {"width":1024,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de0ny6bst"/>`,
		"fallback": "whh:arrowdown",
	});
}

export default Component;
