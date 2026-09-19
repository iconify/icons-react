import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j21hu4qcf.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j21hu4qcf"/>`,
		"fallback": "fad:digital6",
	});
}

export default Component;
