import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6o8f2b4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6o8f2b4i"/>`,
		"fallback": "bx:bx-church",
	});
}

export default Component;
