import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xr6pgbpqd.css';
import '../../css/g/g6kz9cc-f.css';
import '../../css/o/oj-txtbpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="xr6pgbpqd"/><path class="g6kz9cc-f"/><path class="oj-txtbpd"/></g>`,
		"fallback": "withicons-bauhaus:cactus",
	});
}

export default Component;
