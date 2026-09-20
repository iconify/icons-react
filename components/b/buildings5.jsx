import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/a/a4wnmw-xx.css';
import '../../css/a/a8csp9bhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="a4wnmw-xx"/><path class="a8csp9bhw"/></g>`,
		"fallback": "reicon:buildings5",
	});
}

export default Component;
