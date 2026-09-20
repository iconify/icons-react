import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l180r0tap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l180r0tap"/>`,
		"fallback": "mdi:alphabet-i",
	});
}

export default Component;
