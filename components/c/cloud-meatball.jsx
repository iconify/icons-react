import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7706u1il.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7706u1il"/>`,
		"fallback": "fa6-solid:cloud-meatball",
	});
}

export default Component;
