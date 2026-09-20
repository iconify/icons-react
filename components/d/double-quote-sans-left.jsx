import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ys01xebuh.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ys01xebuh"/>`,
		"fallback": "oi:double-quote-sans-left",
	});
}

export default Component;
