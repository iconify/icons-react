import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l5lnwzbfy.css';
import '../../css/b/bd0vmqbjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l5lnwzbfy"/><path clip-rule="evenodd" class="bd0vmqbjo"/></g>`,
		"fallback": "gg:close-r",
	});
}

export default Component;
