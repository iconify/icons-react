import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gz8apab4s.css';
import '../../css/n/nfz3jpbht.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gz8apab4s"/><path class="nfz3jpbht"/></g>`,
		"fallback": "bi:clipboard2-data-fill",
	});
}

export default Component;
