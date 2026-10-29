import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vrui9ubxc.css';
import '../../css/u/uanjz8m2o.css';
import '../../css/w/wri5opbdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vrui9ubxc"/><path class="uanjz8m2o wm-a"/><path class="wri5opbdz"/></g>`,
		"fallback": "withicons:folder-tree-duo",
	});
}

export default Component;
