import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6d9jv8kh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6d9jv8kh"/>`,
		"fallback": "qlementine-icons:align-right-16",
	});
}

export default Component;
