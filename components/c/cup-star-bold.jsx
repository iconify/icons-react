import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hy0wlvbcc.css';
import '../../css/n/ndzvk7pha.css';
import '../../css/q/q2ppdcbwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hy0wlvbcc"/><path class="ndzvk7pha"/><path clip-rule="evenodd" class="q2ppdcbwf"/></g>`,
		"fallback": "solar:cup-star-bold",
	});
}

export default Component;
