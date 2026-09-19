import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rn0_ywbds.css';
import '../../css/f/f8v_5olgi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rn0_ywbds"/><path class="f8v_5olgi"/></g>`,
		"fallback": "fluent-emoji-high-contrast:avocado",
	});
}

export default Component;
