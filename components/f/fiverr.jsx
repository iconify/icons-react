import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l5ddg53rf.css';
import '../../css/l/lm7_ujbrk.css';

const viewBox = {"width":24,"height":24,"left":-2.5,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l5ddg53rf"/><circle class="lm7_ujbrk"/></g>`,
		"fallback": "jam:fiverr",
	});
}

export default Component;
