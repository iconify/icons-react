import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfjl8bbcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfjl8bbcp"/>`,
		"fallback": "typcn:calendar",
	});
}

export default Component;
