import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/y/y6wb7m0iu.css';
import '../../css/a/ad2h2ac6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="y6wb7m0iu"/><path class="ad2h2ac6u"/></g>`,
		"fallback": "flowbite:code-solid",
	});
}

export default Component;
