import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfc4wub2q.css';
import '../../css/a/az_hkit1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfc4wub2q"/><path class="az_hkit1z"/>`,
		"fallback": "bx:bx-calendar-exclamation",
	});
}

export default Component;
