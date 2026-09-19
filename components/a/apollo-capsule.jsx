import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj3psbbfy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj3psbbfy"/>`,
		"fallback": "game-icons:apollo-capsule",
	});
}

export default Component;
