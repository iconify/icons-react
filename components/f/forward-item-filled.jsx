import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vp7dm_-5g.css';
import '../../css/j/je8pdhb8a.css';
import '../../css/t/tt1dhvb_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vp7dm_-5g"/><path class="je8pdhb8a"/><path class="tt1dhvb_j"/></g>`,
		"fallback": "reicon:forward-item-filled",
	});
}

export default Component;
