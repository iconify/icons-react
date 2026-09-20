import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f2jbpwb_z.css';
import '../../css/i/i7n49ic5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><ellipse class="f2jbpwb_z"/><path class="i7n49ic5b"/></g>`,
		"fallback": "reicon:golf-duotone",
	});
}

export default Component;
