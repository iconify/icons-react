import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mlf7ptbhg.css';
import '../../css/f/fx4zx8szt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mlf7ptbhg"/><path class="fx4zx8szt"/></g>`,
		"fallback": "bi:house-fill",
	});
}

export default Component;
