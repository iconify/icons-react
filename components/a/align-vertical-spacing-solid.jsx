import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p04ns8zuz.css';
import '../../css/f/fuyxrcc6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="p04ns8zuz"/><path class="fuyxrcc6j"/></g>`,
		"fallback": "iconoir:align-vertical-spacing-solid",
	});
}

export default Component;
