import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsg8k7w8h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsg8k7w8h"/>`,
		"fallback": "streamline-color:celsius",
	});
}

export default Component;
