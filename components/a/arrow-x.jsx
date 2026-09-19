import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6bj7ybmw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6bj7ybmw"/>`,
		"fallback": "at-icons:arrow-x",
	});
}

export default Component;
