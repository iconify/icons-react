import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/yn06cxa2l.css';
import '../../css/v/v5jdyxbhx.css';
import '../../css/g/gs99q5biw.css';
import '../../css/z/zrrjdvbzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco yn06cxa2l"/><path class="v5jdyxbhx wm-deco"/><path class="gs99q5biw wm-k"/><path class="wm-a zrrjdvbzr"/></g>`,
		"fallback": "withicons:briefcase-blueprint",
	});
}

export default Component;
