import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aoip33bcl.css';
import '../../css/f/fk7rqkb_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aoip33bcl secondary"/><path class="fk7rqkb_q primary"/></g>`,
		"fallback": "iconaut:book-open-text-duotone",
	});
}

export default Component;
