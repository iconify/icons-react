import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffdp46abo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffdp46abo"/>`,
		"fallback": "mdi:bullhorn-variant",
	});
}

export default Component;
