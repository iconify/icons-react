import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxz7qzbbf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxz7qzbbf"/>`,
		"fallback": "streamline-flex-color:facebook-1-flat",
	});
}

export default Component;
