import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k0ua7pbhg.css';
import '../../css/v/v2b8iot3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k0ua7pbhg"/><path class="v2b8iot3t"/></g>`,
		"fallback": "pixelarticons:corner-down-left",
	});
}

export default Component;
