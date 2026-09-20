import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0lqeebjr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0lqeebjr"/>`,
		"fallback": "qlementine-icons:cross-16",
	});
}

export default Component;
