import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my86mbcer.css';
import '../../css/v/v5iwbub1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="my86mbcer"/><path class="v5iwbub1h"/>`,
		"fallback": "streamline-ultimate:alert-bell-notification-2-bold",
	});
}

export default Component;
