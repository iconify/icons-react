import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pre6hebdw.css';
import '../../css/j/j1vcptbqo.css';
import '../../css/m/mqj0a8b5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pre6hebdw"/><path class="j1vcptbqo"/><path class="mqj0a8b5e"/></g>`,
		"fallback": "reicon:diploma-check-duotone",
	});
}

export default Component;
