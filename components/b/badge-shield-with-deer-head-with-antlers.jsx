import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4d9v6lqd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4d9v6lqd"/>`,
		"fallback": "pinhead:badge-shield-with-deer-head-with-antlers",
	});
}

export default Component;
