import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkdvyabge.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkdvyabge"/>`,
		"fallback": "at-icons:doorway",
	});
}

export default Component;
