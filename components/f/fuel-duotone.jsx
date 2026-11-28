import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w-5ehwt2y.css';
import '../../css/b/b-wf0eyoh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary w-5ehwt2y"/><path class="b-wf0eyoh primary"/></g>`,
		"fallback": "iconaut:fuel-duotone",
	});
}

export default Component;
