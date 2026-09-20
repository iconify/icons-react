import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dnd52nb-i.css';
import '../../css/t/t8ezcdbux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dnd52nb-i"/><path clip-rule="evenodd" class="t8ezcdbux"/></g>`,
		"fallback": "reicon:donut2-filled",
	});
}

export default Component;
