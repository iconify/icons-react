import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/j/j1gllxh8j.css';
import '../../css/f/f91ojvb_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="j1gllxh8j"/><path class="f91ojvb_x"/></g>`,
		"fallback": "matita:braces",
	});
}

export default Component;
