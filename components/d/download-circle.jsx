import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/le1goxxnt.css';
import '../../css/c/ct9663bfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="le1goxxnt"/><path class="ct9663bfs"/></g>`,
		"fallback": "lets-icons:download-circle",
	});
}

export default Component;
