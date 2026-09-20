import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fx6xp2d2s.css';
import '../../css/m/mo-3tff5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fx6xp2d2s"/><path class="mo-3tff5f"/></g>`,
		"fallback": "nrk:forward",
	});
}

export default Component;
