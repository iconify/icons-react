import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr0bgcb6t.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/r/r3so_7b4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lr0bgcb6t secondary"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="r3so_7b4u"/></g>`,
		"fallback": "iconaut:circle-three-eighth-duo",
	});
}

export default Component;
