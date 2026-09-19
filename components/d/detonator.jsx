import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rat-wm04r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rat-wm04r"/>`,
		"fallback": "game-icons:detonator",
	});
}

export default Component;
