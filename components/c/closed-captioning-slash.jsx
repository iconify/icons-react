import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1y_cbcio.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1y_cbcio"/>`,
		"fallback": "fa7-solid:closed-captioning-slash",
	});
}

export default Component;
