import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na_o-44vz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="na_o-44vz"/>`,
		"fallback": "game-icons:flower-emblem",
	});
}

export default Component;
