import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v7sy_fbui.css';
import '../../css/b/bgq4_qbnw.css';
import '../../css/r/rlr1feejd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v7sy_fbui"/><path class="bgq4_qbnw"/><path class="rlr1feejd"/></g>`,
		"fallback": "pixelarticons:heading-1",
	});
}

export default Component;
