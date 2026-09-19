import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tmcjz6exl.css';
import '../../css/p/pkmnsrt9g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tmcjz6exl"/><path clip-rule="evenodd" class="pkmnsrt9g"/></g>`,
		"fallback": "codicon:hubot",
	});
}

export default Component;
