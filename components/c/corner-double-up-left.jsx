import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ll49oyb9t.css';
import '../../css/f/f6rhx-bko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ll49oyb9t"/><path class="f6rhx-bko"/></g>`,
		"fallback": "gg:corner-double-up-left",
	});
}

export default Component;
