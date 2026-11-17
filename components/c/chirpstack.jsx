import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpv7c9bnb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpv7c9bnb"/>`,
		"fallback": "selfhst:chirpstack",
	});
}

export default Component;
