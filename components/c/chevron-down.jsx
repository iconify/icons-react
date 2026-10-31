import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lcj6qrb-z.css';
import '../../css/i/ifnki274i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="lcj6qrb-z"/><path class="ifnki274i"/></g>`,
		"fallback": "withicons-retro:chevron-down",
	});
}

export default Component;
