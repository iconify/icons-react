import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs9dfd7xz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fs9dfd7xz"/>`,
		"fallback": "solar:arrow-left-outline",
	});
}

export default Component;
