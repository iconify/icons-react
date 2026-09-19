import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed7v4lbfh.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed7v4lbfh"/>`,
		"fallback": "f7:guitars",
	});
}

export default Component;
