import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in7ea2hci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="in7ea2hci"/>`,
		"fallback": "solar:columns-4-outline",
	});
}

export default Component;
