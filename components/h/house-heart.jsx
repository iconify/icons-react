import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtm7f4y8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtm7f4y8r"/>`,
		"fallback": "mdi:house-heart",
	});
}

export default Component;
