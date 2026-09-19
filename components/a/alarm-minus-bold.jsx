import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lq6s65tyu.css';
import '../../css/x/x0kortrhg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lq6s65tyu"/><path clip-rule="evenodd" class="x0kortrhg"/></g>`,
		"fallback": "glyphs:alarm-minus-bold",
	});
}

export default Component;
