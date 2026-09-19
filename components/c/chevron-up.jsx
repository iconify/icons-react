import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z064y2a9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z064y2a9h"/>`,
		"fallback": "heroicons-outline:chevron-up",
	});
}

export default Component;
