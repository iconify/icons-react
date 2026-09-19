import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt95bo9fx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt95bo9fx"/>`,
		"fallback": "game-icons:card-8-hearts",
	});
}

export default Component;
