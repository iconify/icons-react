import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-h1us7qj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-h1us7qj"/>`,
		"fallback": "lsicon:bottom-align-outline",
	});
}

export default Component;
