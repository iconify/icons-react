import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c5b0y0tyz.css';
import '../../css/b/b5x9xi0bu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="c5b0y0tyz"/><path class="b5x9xi0bu wm-a"/></g>`,
		"fallback": "withicons:copy",
	});
}

export default Component;
