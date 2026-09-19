import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/notlt2-cp.css';
import '../../css/a/ac9awmbvq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="notlt2-cp"/><path class="ac9awmbvq"/></g>`,
		"fallback": "bi:3-square",
	});
}

export default Component;
