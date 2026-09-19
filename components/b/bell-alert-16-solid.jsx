import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i0f_5objp.css';
import '../../css/u/u-v275bxw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i0f_5objp"/><path clip-rule="evenodd" class="u-v275bxw"/></g>`,
		"fallback": "heroicons:bell-alert-16-solid",
	});
}

export default Component;
