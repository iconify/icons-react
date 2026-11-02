import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wep6did8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wep6did8u"/>`,
		"fallback": "mingcute:clock-arrow-up-line",
	});
}

export default Component;
