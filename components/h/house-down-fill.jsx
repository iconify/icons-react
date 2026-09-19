import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/svylyobkb.css';
import '../../css/m/mlf7ptbhg.css';
import '../../css/i/ivmhlacxz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="svylyobkb"/><path class="mlf7ptbhg"/><path class="ivmhlacxz"/></g>`,
		"fallback": "bi:house-down-fill",
	});
}

export default Component;
