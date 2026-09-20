import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nu4x-ob-e.css';
import '../../css/n/njd3u7m6i.css';
import '../../css/g/g8bf7mbzk.css';
import '../../css/s/spsi6z36x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nu4x-ob-e"/><path class="njd3u7m6i"/><path class="g8bf7mbzk"/><path class="spsi6z36x"/></g>`,
		"fallback": "solar:cloud-rain-bold-duotone",
	});
}

export default Component;
