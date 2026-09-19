import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/f-_xrmb9y.css';
import '../../css/j/jhumhtdvb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="f-_xrmb9y"/><path class="jhumhtdvb"/></g>`,
		"fallback": "cryptocurrency-color:crv",
	});
}

export default Component;
