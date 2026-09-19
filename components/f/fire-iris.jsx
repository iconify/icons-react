import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh47_j5vu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uh47_j5vu"/>`,
		"fallback": "game-icons:fire-iris",
	});
}

export default Component;
