import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kntji4pqg.css';
import '../../css/e/e8i5ctbbw.css';
import '../../css/x/xo8rjg3rh.css';
import '../../css/x/xw_tiwbov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kntji4pqg"/><path clip-rule="evenodd" class="e8i5ctbbw"/><path class="xo8rjg3rh"/><path class="xw_tiwbov"/></g>`,
		"fallback": "solar:album-bold",
	});
}

export default Component;
