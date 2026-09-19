import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axfkribhl.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axfkribhl"/>`,
		"fallback": "fa-solid:book-dead",
	});
}

export default Component;
