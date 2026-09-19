import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x2u1aguvq.css';
import '../../css/a/ac9awmbvq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x2u1aguvq"/><path class="ac9awmbvq"/></g>`,
		"fallback": "bi:h-square",
	});
}

export default Component;
