import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mk7e45w8q.css';
import '../../css/q/qoj1bdcyq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mk7e45w8q"/><path class="qoj1bdcyq"/></g>`,
		"fallback": "thesvg:ceylon",
	});
}

export default Component;
