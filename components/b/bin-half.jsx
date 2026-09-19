import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h4-__3b9e.css';
import '../../css/w/w6okfh-6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="h4-__3b9e"/><path class="w6okfh-6u"/></g>`,
		"fallback": "iconoir:bin-half",
	});
}

export default Component;
