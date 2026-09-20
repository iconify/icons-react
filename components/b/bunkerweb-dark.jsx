import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glymc6bhl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glymc6bhl"/>`,
		"fallback": "selfhst:bunkerweb-dark",
	});
}

export default Component;
