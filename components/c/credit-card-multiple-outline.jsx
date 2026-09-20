import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if6t8w8ah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if6t8w8ah"/>`,
		"fallback": "mdi:credit-card-multiple-outline",
	});
}

export default Component;
