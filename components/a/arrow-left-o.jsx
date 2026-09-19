import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wi_bfjb_o.css';
import '../../css/q/qfyrzrbio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wi_bfjb_o"/><path clip-rule="evenodd" class="qfyrzrbio"/></g>`,
		"fallback": "gg:arrow-left-o",
	});
}

export default Component;
