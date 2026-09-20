import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4o3cmuso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4o3cmuso"/>`,
		"fallback": "thesvg-color:icomoon",
	});
}

export default Component;
