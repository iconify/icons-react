import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-la4bbbr.css';

const viewBox = {"width":4605.7,"height":2723.6};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-la4bbbr"/>`,
		"fallback": "thesvg-color:amazon-prime",
	});
}

export default Component;
