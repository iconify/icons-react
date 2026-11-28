import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l4--ovbba.css';
import '../../css/d/d35_kdr6u.css';
import '../../css/d/dj9fk6qte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l4--ovbba"/><path class="d35_kdr6u"/><path class="dj9fk6qte"/></g>`,
		"fallback": "iconaut:badge-terminal",
	});
}

export default Component;
