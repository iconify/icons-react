import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9med6bsr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9med6bsr"/>`,
		"fallback": "pepicons-pencil:grab-handle",
	});
}

export default Component;
