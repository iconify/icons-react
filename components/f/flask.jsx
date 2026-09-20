import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh9xdjbds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh9xdjbds"/>`,
		"fallback": "mdi:flask",
	});
}

export default Component;
