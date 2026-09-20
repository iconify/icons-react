import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py_4ud_kr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py_4ud_kr"/>`,
		"fallback": "la:goodreads-g",
	});
}

export default Component;
