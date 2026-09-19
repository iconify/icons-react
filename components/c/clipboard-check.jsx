import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jzwkv4bnr.css';
import '../../css/i/ifj46hwma.css';
import '../../css/d/dalt38r3y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jzwkv4bnr"/><path class="ifj46hwma"/><path clip-rule="evenodd" class="dalt38r3y"/></g>`,
		"fallback": "pepicons:clipboard-check",
	});
}

export default Component;
