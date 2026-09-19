import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jphu-3yyd.css';
import '../../css/t/th91q255p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="jphu-3yyd"/><path class="th91q255p"/></g>`,
		"fallback": "si-glyph:basket-error",
	});
}

export default Component;
