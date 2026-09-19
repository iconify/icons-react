import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0v178b9i.css';

const viewBox = {"width":344,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0v178b9i"/>`,
		"fallback": "zmdi:book-photo",
	});
}

export default Component;
