import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1n-6si5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1n-6si5y"/>`,
		"fallback": "circum:indent",
	});
}

export default Component;
