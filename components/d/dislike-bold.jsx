import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f_w70mbtz.css';
import '../../css/t/toh9e6tcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f_w70mbtz"/><path class="toh9e6tcu"/></g>`,
		"fallback": "iconamoon:dislike-bold",
	});
}

export default Component;
