import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yih36_51r.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yih36_51r"/>`,
		"fallback": "fa7-solid:bed",
	});
}

export default Component;
