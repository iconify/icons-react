import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unz_1ke_e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unz_1ke_e"/>`,
		"fallback": "game-icons:cubeforce",
	});
}

export default Component;
