import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3rimeb3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3rimeb3o"/>`,
		"fallback": "mdi:checkbox-blank-notification-outline",
	});
}

export default Component;
