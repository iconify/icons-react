import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w11xiwbjq.css';
import '../../css/l/l4uda_bwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w11xiwbjq"/><path class="l4uda_bwv"/></g>`,
		"fallback": "reicon:camera-off-filled",
	});
}

export default Component;
