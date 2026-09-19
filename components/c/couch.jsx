import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yg78gqb1k.css';
import '../../css/h/h9lpzdhad.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yg78gqb1k"/><path class="h9lpzdhad"/></g>`,
		"fallback": "at-icons:couch",
	});
}

export default Component;
