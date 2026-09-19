import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a4be0ccsn.css';
import '../../css/l/l4eep0bfa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a4be0ccsn"/><path class="l4eep0bfa"/></g>`,
		"fallback": "bi:door-closed",
	});
}

export default Component;
