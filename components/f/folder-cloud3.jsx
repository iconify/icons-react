import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/u/u0oydvb4f.css';
import '../../css/j/j4d23n8lc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="u0oydvb4f"/><path class="j4d23n8lc"/></g>`,
		"fallback": "reicon:folder-cloud3",
	});
}

export default Component;
