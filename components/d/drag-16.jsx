import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6edfsb9e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6edfsb9e"/>`,
		"fallback": "qlementine-icons:drag-16",
	});
}

export default Component;
