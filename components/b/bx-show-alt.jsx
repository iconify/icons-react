import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6a2wrqkl.css';
import '../../css/f/f31x6qb0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6a2wrqkl"/><path class="f31x6qb0d"/>`,
		"fallback": "bx:bx-show-alt",
	});
}

export default Component;
