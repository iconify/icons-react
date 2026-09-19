import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kj2w_j80p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kj2w_j80p"/>`,
		"fallback": "game-icons:disc",
	});
}

export default Component;
