import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/warsr81xd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="warsr81xd"/>`,
		"fallback": "mdi:hockey-puck",
	});
}

export default Component;
