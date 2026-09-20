import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/ba5biobjn.css';
import '../../css/s/sepvcvbgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ba5biobjn"/><path class="sepvcvbgm"/></g>`,
		"fallback": "pixelarticons:cellular-signal-3",
	});
}

export default Component;
