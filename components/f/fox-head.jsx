import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf1zivb8o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uf1zivb8o"/>`,
		"fallback": "game-icons:fox-head",
	});
}

export default Component;
