import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h9-32yb5x.css';
import '../../css/p/pl9iy_blx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="h9-32yb5x"/><path class="pl9iy_blx"/></g>`,
		"fallback": "iconoir:app-notification-solid",
	});
}

export default Component;
