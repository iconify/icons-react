import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gra-0qy8j.css';
import '../../css/s/sepvcvbgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gra-0qy8j"/><path class="sepvcvbgm"/></g>`,
		"fallback": "pixelarticons:cellular-signal-3-sharp",
	});
}

export default Component;
