import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mn_vt--sv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mn_vt--sv"/>`,
		"fallback": "game-icons:crossed-slashes",
	});
}

export default Component;
