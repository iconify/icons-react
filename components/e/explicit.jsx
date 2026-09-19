import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a7smjvbxk.css';
import '../../css/w/wzt4aujqr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a7smjvbxk"/><path class="wzt4aujqr"/></g>`,
		"fallback": "bi:explicit",
	});
}

export default Component;
