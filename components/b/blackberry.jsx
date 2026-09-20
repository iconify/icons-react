import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oq7rhjatd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oq7rhjatd"/>`,
		"fallback": "mdi:blackberry",
	});
}

export default Component;
