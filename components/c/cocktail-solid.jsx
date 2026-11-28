import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r1dzk3b8f.css';
import '../../css/i/i99bjacmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r1dzk3b8f"/><path class="i99bjacmo"/></g>`,
		"fallback": "iconaut:cocktail-solid",
	});
}

export default Component;
