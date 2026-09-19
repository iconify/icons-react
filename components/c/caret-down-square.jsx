import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nfz4rubav.css';
import '../../css/a/ac9awmbvq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nfz4rubav"/><path class="ac9awmbvq"/></g>`,
		"fallback": "bi:caret-down-square",
	});
}

export default Component;
