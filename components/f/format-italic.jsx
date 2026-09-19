import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3bsp4s4y.css';

const viewBox = {"width":256,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3bsp4s4y"/>`,
		"fallback": "zmdi:format-italic",
	});
}

export default Component;
