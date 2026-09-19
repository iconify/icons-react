import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rfnphpyms.css';
import '../../css/e/ekf464gcd.css';
import '../../css/r/rb4mrx5mp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rfnphpyms"/><path class="ekf464gcd"/><path clip-rule="evenodd" class="rb4mrx5mp"/></g>`,
		"fallback": "healthicons:blood-a-p-24px",
	});
}

export default Component;
