import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i3sw4_rpn.css';
import '../../css/j/j7jod3cgs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="i3sw4_rpn"/><path class="j7jod3cgs"/></g>`,
		"fallback": "glyphs:hand-holding-seedling-outline",
	});
}

export default Component;
