import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt-53grje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt-53grje"/>`,
		"fallback": "mdi:book-cancel-outline",
	});
}

export default Component;
