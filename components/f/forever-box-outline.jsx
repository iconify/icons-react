import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1a8l432h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1a8l432h"/>`,
		"fallback": "mdi:forever-box-outline",
	});
}

export default Component;
