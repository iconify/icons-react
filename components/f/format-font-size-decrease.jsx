import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glx05_3hy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glx05_3hy"/>`,
		"fallback": "mdi:format-font-size-decrease",
	});
}

export default Component;
