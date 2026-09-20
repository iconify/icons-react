import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v-ii10bxi.css';
import '../../css/d/d4xuwmbun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v-ii10bxi"/><path clip-rule="evenodd" class="d4xuwmbun"/></g>`,
		"fallback": "nrk:bell-expressive",
	});
}

export default Component;
