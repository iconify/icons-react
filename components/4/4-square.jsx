import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aj1eywb6v.css';
import '../../css/a/ac9awmbvq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aj1eywb6v"/><path class="ac9awmbvq"/></g>`,
		"fallback": "bi:4-square",
	});
}

export default Component;
