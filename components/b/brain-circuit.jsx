import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jlp-ovbkm.css';
import '../../css/w/wm1y2mbyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jlp-ovbkm"/><path class="wm-a wm1y2mbyi"/></g>`,
		"fallback": "withicons:brain-circuit",
	});
}

export default Component;
