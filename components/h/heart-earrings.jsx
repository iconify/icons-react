import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq4h58boj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq4h58boj"/>`,
		"fallback": "game-icons:heart-earrings",
	});
}

export default Component;
