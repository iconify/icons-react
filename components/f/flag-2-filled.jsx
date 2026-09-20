import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rrvz3_axw.css';
import '../../css/r/r4u5j4vzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rrvz3_axw"/><path class="r4u5j4vzh"/></g>`,
		"fallback": "reicon:flag-2-filled",
	});
}

export default Component;
