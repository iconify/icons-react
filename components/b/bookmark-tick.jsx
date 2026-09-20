import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqkj8vciz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqkj8vciz"/>`,
		"fallback": "mdi:bookmark-tick",
	});
}

export default Component;
