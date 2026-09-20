import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ucnfbmfrx.css';
import '../../css/k/k5227db7l.css';
import '../../css/j/jwg3u8mon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ucnfbmfrx"/><path class="k5227db7l"/><path class="jwg3u8mon"/></g>`,
		"fallback": "solar:fog-bold",
	});
}

export default Component;
