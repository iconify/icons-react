import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r1s2j8owa.css';
import '../../css/c/c91pc6ooo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r1s2j8owa secondary"/><path class="c91pc6ooo primary"/></g>`,
		"fallback": "iconaut:cards-duotone",
	});
}

export default Component;
