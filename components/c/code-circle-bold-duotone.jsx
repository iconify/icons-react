import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yp54sytzi.css';
import '../../css/p/p0gwhczzy.css';
import '../../css/m/m4dgvdb7q.css';
import '../../css/a/aw66f39yt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yp54sytzi"/><path class="p0gwhczzy"/><path class="m4dgvdb7q"/><path class="aw66f39yt"/></g>`,
		"fallback": "solar:code-circle-bold-duotone",
	});
}

export default Component;
