import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pok33xboe.css';
import '../../css/l/lby5olvrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pok33xboe"/><path class="lby5olvrk"/></g>`,
		"fallback": "tabler:bomb-filled",
	});
}

export default Component;
