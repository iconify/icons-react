import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0zco-ift.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0zco-ift"/>`,
		"fallback": "mdi:credit-card-icc-chip-outline",
	});
}

export default Component;
