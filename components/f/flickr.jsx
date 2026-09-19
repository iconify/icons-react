import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuifqebhj.css';

const viewBox = {"width":1024,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cuifqebhj"/>`,
		"fallback": "whh:flickr",
	});
}

export default Component;
