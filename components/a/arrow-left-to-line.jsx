import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/iq-zhvr4y.css';
import '../../css/z/zmr5eyfhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="iq-zhvr4y"/><path class="zmr5eyfhe"/></g>`,
		"fallback": "withicons-retro:arrow-left-to-line",
	});
}

export default Component;
