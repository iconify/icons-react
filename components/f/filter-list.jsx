import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar-x8db-d.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar-x8db-d"/>`,
		"fallback": "zmdi:filter-list",
	});
}

export default Component;
