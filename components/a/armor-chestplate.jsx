import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jhwggsbdf.css';
import '../../css/r/rro2uvb6g.css';
import '../../css/r/r-v1_w-0v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jhwggsbdf"/><path class="rro2uvb6g"/><path class="r-v1_w-0v"/></g>`,
		"fallback": "at-icons:armor-chestplate",
	});
}

export default Component;
