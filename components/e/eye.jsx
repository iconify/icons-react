import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jaockdbhc.css';
import '../../css/r/r4vo34brb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jaockdbhc"/><path class="r4vo34brb"/></g>`,
		"fallback": "bi:eye",
	});
}

export default Component;
