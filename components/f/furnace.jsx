import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfvf0pz8e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfvf0pz8e"/>`,
		"fallback": "game-icons:furnace",
	});
}

export default Component;
