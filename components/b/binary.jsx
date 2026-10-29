import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j3cn9rb9q.css';
import '../../css/b/bq7bz5b6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="j3cn9rb9q"/><path class="bq7bz5b6b wm-a"/></g>`,
		"fallback": "withicons:binary",
	});
}

export default Component;
