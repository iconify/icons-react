import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jzw96h80v.css';
import '../../css/c/cedeubbmt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jzw96h80v"/><path clip-rule="evenodd" class="cedeubbmt"/></g>`,
		"fallback": "glyphs:alarm-clock-bold",
	});
}

export default Component;
