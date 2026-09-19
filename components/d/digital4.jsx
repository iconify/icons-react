import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k749s-bgr.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k749s-bgr"/>`,
		"fallback": "fad:digital4",
	});
}

export default Component;
