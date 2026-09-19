import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/px8cn61kz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="px8cn61kz"/>`,
		"fallback": "boxicons:address-book-filled",
	});
}

export default Component;
