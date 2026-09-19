import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr3c7yb3y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr3c7yb3y"/>`,
		"fallback": "game-icons:flashlight",
	});
}

export default Component;
