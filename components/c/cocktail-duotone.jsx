import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ya8z-jb5t.css';
import '../../css/o/o0frd8bnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary ya8z-jb5t"/><path class="o0frd8bnv primary"/></g>`,
		"fallback": "iconaut:cocktail-duotone",
	});
}

export default Component;
