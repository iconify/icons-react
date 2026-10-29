import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l484bmbsu.css';
import '../../css/w/wxx3ysb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l484bmbsu"/><path class="wm-a wxx3ysb1g"/></g>`,
		"fallback": "withicons:folder-lock",
	});
}

export default Component;
