import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fg1h69bdi.css';
import '../../css/r/rvvp7hmcr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fg1h69bdi"/><path class="rvvp7hmcr"/></g>`,
		"fallback": "at-icons:cpu",
	});
}

export default Component;
