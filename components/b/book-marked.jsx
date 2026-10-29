import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/on8oj0z_t.css';
import '../../css/e/ehkxemcar.css';
import '../../css/e/e63ymzk4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="on8oj0z_t"/><path class="ehkxemcar"/><path class="e63ymzk4k"/></g>`,
		"fallback": "withicons-bauhaus:book-marked",
	});
}

export default Component;
