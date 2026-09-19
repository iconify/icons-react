import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7ptetrtf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7ptetrtf"/>`,
		"fallback": "cib:codewars",
	});
}

export default Component;
