import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdh9iubqd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdh9iubqd"/>`,
		"fallback": "heroicons-solid:adjustments-horizontal",
	});
}

export default Component;
