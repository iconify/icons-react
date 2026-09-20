import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rn08x5brb.css';
import '../../css/p/pk2i_1x1h.css';
import '../../css/n/ngo4x72kh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rn08x5brb"/><path clip-rule="evenodd" class="pk2i_1x1h"/><path class="ngo4x72kh"/></g>`,
		"fallback": "solar:bomb-emoji-bold",
	});
}

export default Component;
