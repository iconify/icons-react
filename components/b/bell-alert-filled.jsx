import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hzh3rxbbe.css';
import '../../css/i/i_ybz0bjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hzh3rxbbe"/><path class="i_ybz0bjo"/></g>`,
		"fallback": "reicon:bell-alert-filled",
	});
}

export default Component;
