import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dx_c-ib3q.css';
import '../../css/q/q1fy3-b7e.css';
import '../../css/o/o3lba2ruf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dx_c-ib3q"/><path class="q1fy3-b7e"/><path class="o3lba2ruf"/></g>`,
		"fallback": "fluent-emoji-high-contrast:framed-picture",
	});
}

export default Component;
