import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pn7bjw1pu.css';
import '../../css/j/jc8-2yimz.css';
import '../../css/o/otxh-bc8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="pn7bjw1pu wm-shadow"/><path class="jc8-2yimz"/><path class="otxh-bc8k"/></g>`,
		"fallback": "withicons-retro:cloud-drizzle",
	});
}

export default Component;
