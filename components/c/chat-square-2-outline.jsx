import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qq3jwzbiv.css';
import '../../css/l/l_rtxu4wa.css';
import '../../css/i/ia1mkhbft.css';
import '../../css/u/u5bqo67kp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qq3jwzbiv"/><path class="l_rtxu4wa"/><path class="ia1mkhbft"/><path clip-rule="evenodd" class="u5bqo67kp"/></g>`,
		"fallback": "solar:chat-square-2-outline",
	});
}

export default Component;
