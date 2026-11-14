import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le9v28bsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le9v28bsd"/>`,
		"fallback": "hugeicons:briefcase-conveyor-belt",
	});
}

export default Component;
