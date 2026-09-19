import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgq1gye8h.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgq1gye8h"/>`,
		"fallback": "fa6-solid:book-skull",
	});
}

export default Component;
