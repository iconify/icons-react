import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vc_bw3brk.css';
import '../../css/r/rv9u-2b2m.css';
import '../../css/z/z1fe5bbwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vc_bw3brk"/><path class="rv9u-2b2m"/><path class="z1fe5bbwo"/></g>`,
		"fallback": "majesticons:globe-line",
	});
}

export default Component;
