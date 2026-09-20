import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/un3ziqb9d.css';
import '../../css/d/di3pn9b5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="un3ziqb9d"/><path class="di3pn9b5w"/></g>`,
		"fallback": "reicon:gas-station-duotone",
	});
}

export default Component;
