import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4x2acm3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4x2acm3w"/>`,
		"fallback": "mdi:cloud-check-variant-outline",
	});
}

export default Component;
