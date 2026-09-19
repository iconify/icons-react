import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr56h3nhe.css';

const viewBox = {"width":472,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr56h3nhe"/>`,
		"fallback": "zmdi:collection-item-4",
	});
}

export default Component;
