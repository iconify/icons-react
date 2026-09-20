import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j_5kv-z4a.css';
import '../../css/y/yv5xw4bto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j_5kv-z4a"/><path clip-rule="evenodd" class="yv5xw4bto"/></g>`,
		"fallback": "reicon:graph-down",
	});
}

export default Component;
