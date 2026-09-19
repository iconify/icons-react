import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/krzm0-bqz.css';
import '../../css/x/x-7ribc8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="krzm0-bqz"/><path class="x-7ribc8x"/></g>`,
		"fallback": "iconoir:align-vertical-centers",
	});
}

export default Component;
