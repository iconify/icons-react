import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vf676cmfn.css';
import '../../css/q/q1mgl9bbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vf676cmfn"/><path class="q1mgl9bbg"/></g>`,
		"fallback": "proicons:bookmark-add",
	});
}

export default Component;
