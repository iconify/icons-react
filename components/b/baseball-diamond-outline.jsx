import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gow1o793z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gow1o793z"/>`,
		"fallback": "mdi:baseball-diamond-outline",
	});
}

export default Component;
