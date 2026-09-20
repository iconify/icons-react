import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyfts8-ee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyfts8-ee"/>`,
		"fallback": "mdi:info-variant-circle-outline",
	});
}

export default Component;
