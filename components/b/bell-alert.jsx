import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rvw1gjbmf.css';
import '../../css/y/y5tcy_bsg.css';
import '../../css/i/i_ybz0bjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rvw1gjbmf"/><path clip-rule="evenodd" class="y5tcy_bsg"/><path class="i_ybz0bjo"/></g>`,
		"fallback": "reicon:bell-alert",
	});
}

export default Component;
