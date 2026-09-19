import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/daj3csamo.css';
import '../../css/a/ac9awmbvq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="daj3csamo"/><path class="ac9awmbvq"/></g>`,
		"fallback": "bi:c-square",
	});
}

export default Component;
