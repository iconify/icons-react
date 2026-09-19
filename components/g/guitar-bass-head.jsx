import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-4njwbvj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-4njwbvj"/>`,
		"fallback": "game-icons:guitar-bass-head",
	});
}

export default Component;
