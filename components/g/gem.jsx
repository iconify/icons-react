import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dbqmg1f3w.css';
import '../../css/u/uzvf5obnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="dbqmg1f3w"/><path class="uzvf5obnx wm-a"/></g>`,
		"fallback": "withicons:gem",
	});
}

export default Component;
