import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b478ysu_w.css';
import '../../css/i/i855i0nqt.css';
import '../../css/v/vztj0xbin.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b478ysu_w"/><path class="i855i0nqt"/><path class="vztj0xbin"/></g>`,
		"fallback": "bi:border-inner",
	});
}

export default Component;
