import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw9ntk0ra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw9ntk0ra"/>`,
		"fallback": "mdi:book-arrow-down-outline",
	});
}

export default Component;
