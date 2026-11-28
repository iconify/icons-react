import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg4oj7sun.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg4oj7sun"/>`,
		"fallback": "pullo:bookmark-simple-plus-bold",
	});
}

export default Component;
