import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tsj0cdsuu.css';
import '../../css/o/oy9hml36g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="tsj0cdsuu"/><path class="oy9hml36g"/></g>`,
		"fallback": "withicons-retro:at-sign",
	});
}

export default Component;
