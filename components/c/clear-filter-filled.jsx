import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6ovz8bgh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y6ovz8bgh"/>`,
		"fallback": "ix:clear-filter-filled",
	});
}

export default Component;
