import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/ctjcreb2q.css';
import '../../css/l/levrdiinv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ctjcreb2q"/><path class="levrdiinv wm-a"/></g>`,
		"fallback": "withicons:book-open-text",
	});
}

export default Component;
