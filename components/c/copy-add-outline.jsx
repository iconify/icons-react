import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xy7i0-zdg.css';
import '../../css/r/r-z1rs2bk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xy7i0-zdg"/><path clip-rule="evenodd" class="r-z1rs2bk"/></g>`,
		"fallback": "solar:copy-add-outline",
	});
}

export default Component;
