import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf6nn3bui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf6nn3bui"/>`,
		"fallback": "mdi:chevron-down-circle",
	});
}

export default Component;
