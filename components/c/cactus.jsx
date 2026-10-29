import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ukna4qm-o.css';
import '../../css/j/jzul1pbjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ukna4qm-o"/><path class="jzul1pbjt wm-a"/></g>`,
		"fallback": "withicons:cactus",
	});
}

export default Component;
