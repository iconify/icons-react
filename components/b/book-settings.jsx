import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl7-ffbbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl7-ffbbi"/>`,
		"fallback": "mdi:book-settings",
	});
}

export default Component;
