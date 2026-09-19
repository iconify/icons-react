import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v70ca4k4c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v70ca4k4c"/>`,
		"fallback": "game-icons:cable-stayed-bridge",
	});
}

export default Component;
