import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sv5g8dz8r.css';
import '../../css/n/ncz1evfhz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sv5g8dz8r"/><path class="ncz1evfhz"/></g>`,
		"fallback": "bi:cup-hot-fill",
	});
}

export default Component;
