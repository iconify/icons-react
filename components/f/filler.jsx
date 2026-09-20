import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1w8w8b4z.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1w8w8b4z"/>`,
		"fallback": "picon:filler",
	});
}

export default Component;
