import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fzkfelb3x.css';
import '../../css/i/iwyb8yb8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fzkfelb3x"/><path class="iwyb8yb8z"/></g>`,
		"fallback": "reicon:archive-check-duotone",
	});
}

export default Component;
