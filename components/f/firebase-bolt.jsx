import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjn9d8bpr.css';

const viewBox = {"width":272,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjn9d8bpr"/>`,
		"fallback": "file-icons:firebase-bolt",
	});
}

export default Component;
