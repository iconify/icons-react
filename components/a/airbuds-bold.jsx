import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kc8g53b6d.css';
import '../../css/v/vjyrizbpz.css';
import '../../css/i/i7veoobmy.css';
import '../../css/r/rsm-rlbvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kc8g53b6d"/><path class="vjyrizbpz"/><path clip-rule="evenodd" class="i7veoobmy"/><path clip-rule="evenodd" class="rsm-rlbvm"/></g>`,
		"fallback": "solar:airbuds-bold",
	});
}

export default Component;
