import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6a5zmb8t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6a5zmb8t"/>`,
		"fallback": "selfhst:boost-mobile",
	});
}

export default Component;
