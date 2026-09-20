import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hezl8sbmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hezl8sbmc"/>`,
		"fallback": "mdi:cookie-alert-outline",
	});
}

export default Component;
