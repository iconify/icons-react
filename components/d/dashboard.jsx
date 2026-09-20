import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8yr_-b9y.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8yr_-b9y"/>`,
		"fallback": "oi:dashboard",
	});
}

export default Component;
