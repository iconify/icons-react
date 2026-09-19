import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r5bop7bxm.css';
import '../../css/w/wmhhextjv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r5bop7bxm"/><path class="wmhhextjv"/></g>`,
		"fallback": "fluent-emoji-flat:hot-pepper",
	});
}

export default Component;
