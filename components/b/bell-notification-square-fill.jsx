import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk3rxbbvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk3rxbbvn"/>`,
		"fallback": "mage:bell-notification-square-fill",
	});
}

export default Component;
