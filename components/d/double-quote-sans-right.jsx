import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/naa-2hjrt.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="naa-2hjrt"/>`,
		"fallback": "oi:double-quote-sans-right",
	});
}

export default Component;
