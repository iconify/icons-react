import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tysq3hb7k.css';

const viewBox = {"width":666,"height":680};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tysq3hb7k"/>`,
		"fallback": "ls:flickr",
	});
}

export default Component;
