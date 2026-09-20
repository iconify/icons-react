import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yef1ulbhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yef1ulbhf"/>`,
		"fallback": "streamline-ultimate:alert-bell-notification-2",
	});
}

export default Component;
