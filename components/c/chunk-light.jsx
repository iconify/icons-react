import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmb9zzosy.css';

const viewBox = {"width":65,"height":65,"left":33};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmb9zzosy"/>`,
		"fallback": "thesvg-color:chunk-light",
	});
}

export default Component;
