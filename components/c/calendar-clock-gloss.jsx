import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tjb6uub5g.css';
import '../../css/j/jnqo7-bin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="tjb6uub5g wm-k"/><path class="jnqo7-bin wm-s"/></g>`,
		"fallback": "withicons:calendar-clock-gloss",
	});
}

export default Component;
