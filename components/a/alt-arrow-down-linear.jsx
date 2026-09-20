import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx6v7i57h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cx6v7i57h"/>`,
		"fallback": "solar:alt-arrow-down-linear",
	});
}

export default Component;
