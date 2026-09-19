import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awa0cqb9e.css';

const viewBox = {"width":472,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awa0cqb9e"/>`,
		"fallback": "zmdi:collection-item-7",
	});
}

export default Component;
