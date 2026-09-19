import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/keqp-sc-z.css';
import '../../css/f/fv8mzr5jz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="keqp-sc-z"/><path class="fv8mzr5jz"/></g>`,
		"fallback": "cryptocurrency-color:chat",
	});
}

export default Component;
