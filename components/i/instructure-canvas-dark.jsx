import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eaqhmxb8i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eaqhmxb8i"/>`,
		"fallback": "selfhst:instructure-canvas-dark",
	});
}

export default Component;
