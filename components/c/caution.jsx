import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wi0t6ac8a.css';
import '../../css/e/eyvtn7bui.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wi0t6ac8a"/><path class="eyvtn7bui"/></g>`,
		"fallback": "rivet-icons:caution",
	});
}

export default Component;
