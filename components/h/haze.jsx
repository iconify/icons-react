import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p9p5a1b2u.css';
import '../../css/m/mth5vcoxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p9p5a1b2u"/><path class="mth5vcoxk"/></g>`,
		"fallback": "griddy-icons:haze",
	});
}

export default Component;
