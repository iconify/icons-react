import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1j98kb0y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1j98kb0y"/>`,
		"fallback": "game-icons:disc-golf-basket",
	});
}

export default Component;
