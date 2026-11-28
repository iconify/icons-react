import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yye4yyb7z.css';
import '../../css/h/hm6h6gb7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary yye4yyb7z"/><path class="hm6h6gb7h primary"/></g>`,
		"fallback": "iconaut:folder-tree-duotone",
	});
}

export default Component;
