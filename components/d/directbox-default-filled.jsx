import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j_eme4l1z.css';
import '../../css/d/dv9iuf1wr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j_eme4l1z"/><path class="dv9iuf1wr"/></g>`,
		"fallback": "reicon:directbox-default-filled",
	});
}

export default Component;
