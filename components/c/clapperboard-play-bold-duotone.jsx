import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v7-s45wqk.css';
import '../../css/v/vohrg0uxt.css';
import '../../css/s/s2x337bqx.css';
import '../../css/w/wuz6-icel.css';
import '../../css/i/i52sr-dmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v7-s45wqk"/><path class="vohrg0uxt"/><path class="s2x337bqx"/><path class="wuz6-icel"/><path class="i52sr-dmc"/></g>`,
		"fallback": "solar:clapperboard-play-bold-duotone",
	});
}

export default Component;
