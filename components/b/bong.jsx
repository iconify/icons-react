import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j25ju4bkr.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j25ju4bkr"/>`,
		"fallback": "fa-solid:bong",
	});
}

export default Component;
