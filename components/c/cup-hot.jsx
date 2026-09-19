import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j8a3_93ul.css';
import '../../css/n/ncz1evfhz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j8a3_93ul"/><path class="ncz1evfhz"/></g>`,
		"fallback": "bi:cup-hot",
	});
}

export default Component;
