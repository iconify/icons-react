import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifu3skbry.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifu3skbry"/>`,
		"fallback": "game-icons:abstract-005",
	});
}

export default Component;
