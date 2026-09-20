import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rooyjwbja.css';
import '../../css/d/dxvzvuuku.css';
import '../../css/r/rq3k_9bvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rooyjwbja"/><path class="dxvzvuuku"/><path clip-rule="evenodd" class="rq3k_9bvm"/></g>`,
		"fallback": "reicon:eye-scan-duotone",
	});
}

export default Component;
