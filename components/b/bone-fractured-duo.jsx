import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn0-deb2k.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/el1390byg.css';
import '../../css/e/ehrxwkb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn0-deb2k secondary"/><g class="dt0cm9dhy primary"><path class="el1390byg"/><path class="ehrxwkb6w"/></g>`,
		"fallback": "iconaut:bone-fractured-duo",
	});
}

export default Component;
