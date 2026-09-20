import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f31f9vmdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f31f9vmdo"/>`,
		"fallback": "mdi:123",
	});
}

export default Component;
