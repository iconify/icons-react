import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kdpl1_b6g.css';
import '../../css/v/vs1hy1byd.css';
import '../../css/n/neg45tb-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kdpl1_b6g"/><path clip-rule="evenodd" class="vs1hy1byd"/><path class="neg45tb-d"/></g>`,
		"fallback": "reicon:boombox-duotone",
	});
}

export default Component;
