import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lq6s65tyu.css';
import '../../css/o/oxcak9zvn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lq6s65tyu"/><path clip-rule="evenodd" class="oxcak9zvn"/></g>`,
		"fallback": "glyphs:alarm-plus-bold",
	});
}

export default Component;
