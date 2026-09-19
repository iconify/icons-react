import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2zt6obtt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2zt6obtt"/>`,
		"fallback": "game-icons:eagle-emblem",
	});
}

export default Component;
