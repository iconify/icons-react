import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n12z-tb1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n12z-tb1h"/>`,
		"fallback": "mdi:head-outline",
	});
}

export default Component;
