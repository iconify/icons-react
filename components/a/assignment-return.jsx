import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j31pc0nke.css';

const viewBox = {"width":384,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j31pc0nke"/>`,
		"fallback": "zmdi:assignment-return",
	});
}

export default Component;
