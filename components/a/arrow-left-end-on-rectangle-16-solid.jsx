import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/ws1t93cls.css';
import '../../css/v/vvmzd-91e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ws1t93cls"/><path class="vvmzd-91e"/></g>`,
		"fallback": "heroicons:arrow-left-end-on-rectangle-16-solid",
	});
}

export default Component;
