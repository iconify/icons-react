import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gc_-hub4z.css';
import '../../css/t/tsqe1pboz.css';
import '../../css/l/lq23_x48i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gc_-hub4z"/><path class="tsqe1pboz"/><path class="lq23_x48i wm-a"/></g>`,
		"fallback": "withicons:container",
	});
}

export default Component;
