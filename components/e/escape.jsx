import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/udjpf9bwm.css';
import '../../css/d/d__trhdbz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="udjpf9bwm"/><path class="d__trhdbz"/></g>`,
		"fallback": "bi:escape",
	});
}

export default Component;
