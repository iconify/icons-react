import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duq0bm0ie.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duq0bm0ie"/>`,
		"fallback": "whh:bait",
	});
}

export default Component;
