import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b805xndzp.css';

const viewBox = {"width":472,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b805xndzp"/>`,
		"fallback": "zmdi:collection-item-3",
	});
}

export default Component;
