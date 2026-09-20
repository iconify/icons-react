import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-d5f3oms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-d5f3oms"/>`,
		"fallback": "mdi:book-minus-multiple",
	});
}

export default Component;
