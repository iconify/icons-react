import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q3vxgm0sv.css';
import '../../css/t/t16cpubnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q3vxgm0sv secondary"/><path class="primary t16cpubnk"/></g>`,
		"fallback": "iconaut:archive-duotone",
	});
}

export default Component;
