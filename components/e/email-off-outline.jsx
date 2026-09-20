import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbogypbkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbogypbkf"/>`,
		"fallback": "mdi:email-off-outline",
	});
}

export default Component;
