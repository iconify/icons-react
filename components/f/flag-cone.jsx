import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tjb8fcceq.css';
import '../../css/g/gwkjosbxe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tjb8fcceq"/><path class="gwkjosbxe"/></g>`,
		"fallback": "at-icons:flag-cone",
	});
}

export default Component;
