import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gktc5ub9y.css';
import '../../css/i/ievx_9_eg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="gktc5ub9y"/><path class="ievx_9_eg"/></g>`,
		"fallback": "cryptocurrency-color:btcp",
	});
}

export default Component;
