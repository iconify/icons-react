import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2r6r_wuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2r6r_wuz"/>`,
		"fallback": "mdi:image-filter-center-focus-strong-outline",
	});
}

export default Component;
