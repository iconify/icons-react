import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p281ozb3g.css';
import '../../css/u/u6gm10bfx.css';
import '../../css/i/i21t0ez6r.css';
import '../../css/m/mrsh1dbjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p281ozb3g"/><path class="u6gm10bfx"/><path class="i21t0ez6r"/><path class="mrsh1dbjk"/></g>`,
		"fallback": "solar:bag-5-bold-duotone",
	});
}

export default Component;
