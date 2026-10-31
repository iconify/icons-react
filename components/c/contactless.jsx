import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vzziuuuht.css';
import '../../css/y/y66eru-zq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vzziuuuht"/><path class="y66eru-zq"/></g>`,
		"fallback": "withicons-retro:contactless",
	});
}

export default Component;
