import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ey-ar0bsu.css';

const viewBox = {"width":666,"height":644};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ey-ar0bsu"/>`,
		"fallback": "ls:alignright",
	});
}

export default Component;
