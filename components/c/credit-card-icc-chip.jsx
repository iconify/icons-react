import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8f83c8eh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8f83c8eh"/>`,
		"fallback": "mdi:credit-card-icc-chip",
	});
}

export default Component;
