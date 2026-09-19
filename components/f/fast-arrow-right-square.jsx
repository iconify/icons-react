import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kodwtyteq.css';
import '../../css/c/ct42dfb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kodwtyteq"/><path class="ct42dfb0y"/></g>`,
		"fallback": "iconoir:fast-arrow-right-square",
	});
}

export default Component;
