import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqi50_-_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqi50_-_e"/>`,
		"fallback": "mdi:book-cog",
	});
}

export default Component;
