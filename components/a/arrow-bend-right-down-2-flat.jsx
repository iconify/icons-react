import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk51cfb9h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xk51cfb9h"/>`,
		"fallback": "streamline-color:arrow-bend-right-down-2-flat",
	});
}

export default Component;
