import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcj9e0oij.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcj9e0oij"/>`,
		"fallback": "fa7-solid:hands-holding",
	});
}

export default Component;
