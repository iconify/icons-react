import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9-abobfl.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9-abobfl"/>`,
		"fallback": "simple-line-icons:energy",
	});
}

export default Component;
