import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e2bcnz59s.css';
import '../../css/c/cno85oh5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e2bcnz59s"/><path class="cno85oh5x"/></g>`,
		"fallback": "reicon:diagram-filled",
	});
}

export default Component;
