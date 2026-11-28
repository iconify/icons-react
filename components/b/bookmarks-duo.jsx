import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nifb8ib4x.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p62ofhric.css';
import '../../css/u/ubuapjbpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nifb8ib4x secondary"/><g class="dt0cm9dhy primary"><path class="p62ofhric"/><path class="ubuapjbpy"/></g>`,
		"fallback": "iconaut:bookmarks-duo",
	});
}

export default Component;
