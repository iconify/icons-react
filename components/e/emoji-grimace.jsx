import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q40dddcum.css';
import '../../css/a/any4tlb_v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q40dddcum"/><path class="any4tlb_v"/></g>`,
		"fallback": "bi:emoji-grimace",
	});
}

export default Component;
