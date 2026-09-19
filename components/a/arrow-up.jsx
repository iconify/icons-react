import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6lyin5ar.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6lyin5ar"/>`,
		"fallback": "fa7-solid:arrow-up",
	});
}

export default Component;
