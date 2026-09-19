import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dsf27g_nh.css';
import '../../css/r/rwa0t5xvq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dsf27g_nh"/><path class="rwa0t5xvq"/></g>`,
		"fallback": "glyphs:arrow-turn-bold",
	});
}

export default Component;
