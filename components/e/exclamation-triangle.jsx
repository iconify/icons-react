import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x9dkc6fog.css';
import '../../css/d/dysjndq4x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x9dkc6fog"/><path class="dysjndq4x"/></g>`,
		"fallback": "bi:exclamation-triangle",
	});
}

export default Component;
