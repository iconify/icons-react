import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6a0qnbks.css';
import '../../css/k/k2rhzeb7g.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6a0qnbks"/><path class="k2rhzeb7g"/>`,
		"fallback": "openmoji:ballet-shoes",
	});
}

export default Component;
