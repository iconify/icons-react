import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7i9mubje.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7i9mubje"/>`,
		"fallback": "carbon:asleep",
	});
}

export default Component;
