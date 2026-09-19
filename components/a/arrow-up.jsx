import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn7avwbsy.css';

const viewBox = {"width":630,"height":700};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zn7avwbsy"/>`,
		"fallback": "il:arrow-up",
	});
}

export default Component;
