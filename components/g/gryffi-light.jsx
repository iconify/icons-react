import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni0oi3q4v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni0oi3q4v"/>`,
		"fallback": "selfhst:gryffi-light",
	});
}

export default Component;
