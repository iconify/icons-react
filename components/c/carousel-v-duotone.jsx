import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fgrhadbtp.css';
import '../../css/d/dwun4ddgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fgrhadbtp"/><path class="dwun4ddgw"/></g>`,
		"fallback": "reicon:carousel-v-duotone",
	});
}

export default Component;
