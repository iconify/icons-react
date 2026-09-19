import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b-mcuccpu.css';
import '../../css/y/y5z1bf35x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b-mcuccpu"/><path class="y5z1bf35x"/></g>`,
		"fallback": "bi:check2-circle",
	});
}

export default Component;
