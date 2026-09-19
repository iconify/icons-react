import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps4e3y-ia.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps4e3y-ia"/>`,
		"fallback": "game-icons:crosshair",
	});
}

export default Component;
