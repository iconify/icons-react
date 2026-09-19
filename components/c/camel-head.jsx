import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwrlgdc4r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwrlgdc4r"/>`,
		"fallback": "game-icons:camel-head",
	});
}

export default Component;
