import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/c/c7b2bbc8q.css';
import '../../css/s/s-m4ly8hu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="c7b2bbc8q"/><path class="s-m4ly8hu"/></g>`,
		"fallback": "reicon:clipboard-export",
	});
}

export default Component;
