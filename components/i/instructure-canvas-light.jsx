import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df302sb6x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df302sb6x"/>`,
		"fallback": "selfhst:instructure-canvas-light",
	});
}

export default Component;
