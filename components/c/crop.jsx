import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-md9ub0v.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-md9ub0v"/>`,
		"fallback": "simple-line-icons:crop",
	});
}

export default Component;
