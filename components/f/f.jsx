import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0qy6t9rz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0qy6t9rz"/>`,
		"fallback": "fa7-solid:f",
	});
}

export default Component;
