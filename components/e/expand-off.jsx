import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jkzaizbed.css';
import '../../css/p/peqjldbmx.css';
import '../../css/q/q4l54cb7c.css';
import '../../css/m/m-kwq4bxb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jkzaizbed"/><path class="peqjldbmx"/><path class="q4l54cb7c"/><path class="m-kwq4bxb"/></g>`,
		"fallback": "pepicons-pencil:expand-off",
	});
}

export default Component;
