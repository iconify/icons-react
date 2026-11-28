import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t2ocikbxr.css';
import '../../css/m/mp-7zebgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary t2ocikbxr"/><path class="mp-7zebgb primary"/></g>`,
		"fallback": "iconaut:foldable-closed-duotone",
	});
}

export default Component;
