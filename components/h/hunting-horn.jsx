import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oln5j1o1d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oln5j1o1d"/>`,
		"fallback": "game-icons:hunting-horn",
	});
}

export default Component;
