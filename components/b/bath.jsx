import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r1k2pwbwt.css';
import '../../css/q/qt7kmab9u.css';
import '../../css/v/v7x6mkybi.css';
import '../../css/s/sjr1ayb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="r1k2pwbwt wm-shadow"/><path class="qt7kmab9u"/><path class="v7x6mkybi"/><path class="sjr1ayb9x"/></g>`,
		"fallback": "withicons-retro:bath",
	});
}

export default Component;
