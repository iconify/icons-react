import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/owd1uwb0f.css';
import '../../css/x/xc9kgo8by.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="owd1uwb0f"/><path class="xc9kgo8by"/></g>`,
		"fallback": "withicons-retro:corner-down-right",
	});
}

export default Component;
