import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3nv8zlly.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3nv8zlly"/>`,
		"fallback": "carbon:at",
	});
}

export default Component;
