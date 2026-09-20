import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la_7fabio.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la_7fabio"/>`,
		"fallback": "selfhst:frigoligo-dark",
	});
}

export default Component;
