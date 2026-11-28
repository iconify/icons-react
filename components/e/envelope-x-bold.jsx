import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcla7g79v.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcla7g79v"/>`,
		"fallback": "pullo:envelope-x-bold",
	});
}

export default Component;
