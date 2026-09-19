import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/opsqj4buz.css';
import '../../css/b/bzysdqjmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="opsqj4buz"/><path clip-rule="evenodd" class="bzysdqjmp"/></g>`,
		"fallback": "gg:folder-remove",
	});
}

export default Component;
