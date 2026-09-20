import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xhgh3zgsg.css';
import '../../css/x/xxo4snyqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xhgh3zgsg"/><path class="xxo4snyqb"/></g>`,
		"fallback": "lets-icons:cloud",
	});
}

export default Component;
