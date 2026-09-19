import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqhlopbsd.css';

const viewBox = {"width":472,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqhlopbsd"/>`,
		"fallback": "zmdi:collection-item-6",
	});
}

export default Component;
