import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcp0p3h6q.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcp0p3h6q"/>`,
		"fallback": "fa6-solid:book-atlas",
	});
}

export default Component;
