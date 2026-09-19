import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m25665yni.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m25665yni"/>`,
		"fallback": "game-icons:ham-shank",
	});
}

export default Component;
