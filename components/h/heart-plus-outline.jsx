import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka1t0xb-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka1t0xb-w"/>`,
		"fallback": "mdi:heart-plus-outline",
	});
}

export default Component;
