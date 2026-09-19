import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f81oufbuc.css';
import '../../css/e/e-0caybdp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f81oufbuc"/><path class="e-0caybdp"/></g>`,
		"fallback": "heroicons-solid:inbox-in",
	});
}

export default Component;
