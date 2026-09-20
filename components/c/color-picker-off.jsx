import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/de4-70ccf.css';
import '../../css/q/q1egusbpi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="de4-70ccf"/><path class="q1egusbpi"/></g>`,
		"fallback": "pepicons-pencil:color-picker-off",
	});
}

export default Component;
