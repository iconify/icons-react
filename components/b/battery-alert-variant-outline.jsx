import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gso-zgxke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gso-zgxke"/>`,
		"fallback": "mdi:battery-alert-variant-outline",
	});
}

export default Component;
