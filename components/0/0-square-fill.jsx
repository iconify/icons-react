import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/za4p_oyur.css';
import '../../css/u/uankymbfj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="za4p_oyur"/><path class="uankymbfj"/></g>`,
		"fallback": "bi:0-square-fill",
	});
}

export default Component;
