import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rk8-3t7mg.css';
import '../../css/a/a7r49iu5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rk8-3t7mg"/><path class="a7r49iu5w"/></g>`,
		"fallback": "reicon:cloud-connection-filled",
	});
}

export default Component;
