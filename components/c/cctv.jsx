import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ipr557bpu.css';
import '../../css/d/db38wxdje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ipr557bpu"/><path class="db38wxdje wm-a"/></g>`,
		"fallback": "withicons:cctv",
	});
}

export default Component;
