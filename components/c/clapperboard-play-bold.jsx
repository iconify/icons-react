import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q6oxflbgu.css';
import '../../css/x/xg0kfbcnh.css';
import '../../css/e/eaotdibie.css';
import '../../css/f/f4d5x_t8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q6oxflbgu"/><path class="xg0kfbcnh"/><path clip-rule="evenodd" class="eaotdibie"/><path class="f4d5x_t8i"/></g>`,
		"fallback": "solar:clapperboard-play-bold",
	});
}

export default Component;
