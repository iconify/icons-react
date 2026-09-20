import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d68ervb4k.css';
import '../../css/r/rtpvlhbro.css';
import '../../css/y/y7x24zb6u.css';
import '../../css/m/m-br5bbby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d68ervb4k"/><path class="rtpvlhbro"/><path class="y7x24zb6u"/><path clip-rule="evenodd" class="m-br5bbby"/></g>`,
		"fallback": "solar:bonfire-bold",
	});
}

export default Component;
