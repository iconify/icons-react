import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w5voolbfq.css';
import '../../css/j/jaarw0bqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="w5voolbfq"/><path class="jaarw0bqi"/></g>`,
		"fallback": "iconaut:factory",
	});
}

export default Component;
