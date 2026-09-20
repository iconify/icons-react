import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/slpz01b0t.css';
import '../../css/i/iwyb8yb8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="slpz01b0t"/><path class="iwyb8yb8z"/></g>`,
		"fallback": "reicon:archive-down-duotone",
	});
}

export default Component;
