import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhb2l5b5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jhb2l5b5r"/>`,
		"fallback": "solar:atom-outline",
	});
}

export default Component;
