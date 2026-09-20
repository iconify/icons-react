import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nndtzvb-p.css';
import '../../css/j/jnbhyedwz.css';
import '../../css/w/wefvhdcza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nndtzvb-p"/><path class="jnbhyedwz"/><path class="wefvhdcza"/></g>`,
		"fallback": "solar:airbuds-case-bold",
	});
}

export default Component;
