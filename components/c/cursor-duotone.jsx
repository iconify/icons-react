import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dv7omhvrh.css';
import '../../css/r/r3cxx87sh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dv7omhvrh"/><path class="r3cxx87sh"/></g>`,
		"fallback": "reicon:cursor-duotone",
	});
}

export default Component;
