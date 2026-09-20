import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ussvs16db.css';
import '../../css/d/dlk4u_4pa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ussvs16db"/><path clip-rule="evenodd" class="dlk4u_4pa"/></g>`,
		"fallback": "solar:bag-music-2-bold",
	});
}

export default Component;
