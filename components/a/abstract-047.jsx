import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc71ixbvd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc71ixbvd"/>`,
		"fallback": "game-icons:abstract-047",
	});
}

export default Component;
