import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku9l-5byw.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ku9l-5byw"/>`,
		"fallback": "pullo:image-slash-bold",
	});
}

export default Component;
