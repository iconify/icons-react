import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h05putmmi.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h05putmmi"/>`,
		"fallback": "oi:book",
	});
}

export default Component;
