import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q99q01k5z.css';
import '../../css/x/xd3f3n6_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="q99q01k5z wm-k"/><path class="wm-a xd3f3n6_u"/></g>`,
		"fallback": "withicons-bauhaus:candy-corn",
	});
}

export default Component;
