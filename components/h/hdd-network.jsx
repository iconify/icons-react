import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fjffwk9zj.css';
import '../../css/c/c3x8m5z-v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fjffwk9zj"/><path class="c3x8m5z-v"/></g>`,
		"fallback": "bi:hdd-network",
	});
}

export default Component;
