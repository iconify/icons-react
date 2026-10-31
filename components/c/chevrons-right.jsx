import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lry3ldb6p.css';
import '../../css/n/ng5l85s7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="lry3ldb6p"/><path class="ng5l85s7x"/></g>`,
		"fallback": "withicons-retro:chevrons-right",
	});
}

export default Component;
