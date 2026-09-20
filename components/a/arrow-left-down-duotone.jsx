import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ofs52lbev.css';
import '../../css/j/jjjktz3tq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ofs52lbev"/><path class="jjjktz3tq"/></g>`,
		"fallback": "reicon:arrow-left-down-duotone",
	});
}

export default Component;
