import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iftlmeb6r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iftlmeb6r"/>`,
		"fallback": "game-icons:3d-stairs",
	});
}

export default Component;
