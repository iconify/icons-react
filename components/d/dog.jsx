import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eo9l_e8to.css';
import '../../css/b/b-ip24yyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eo9l_e8to"/><path clip-rule="evenodd" class="b-ip24yyr"/></g>`,
		"fallback": "griddy-icons:dog",
	});
}

export default Component;
