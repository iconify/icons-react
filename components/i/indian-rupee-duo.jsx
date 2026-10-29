import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/g-df8cc8q.css';
import '../../css/b/bx-9x2f1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="g-df8cc8q"/><path class="bx-9x2f1z wm-a"/></g>`,
		"fallback": "withicons:indian-rupee-duo",
	});
}

export default Component;
