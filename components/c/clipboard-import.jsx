import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/c/c7b2bbc8q.css';
import '../../css/r/rlf12ejyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="c7b2bbc8q"/><path class="rlf12ejyg"/></g>`,
		"fallback": "reicon:clipboard-import",
	});
}

export default Component;
