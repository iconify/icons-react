import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mlf7ptbhg.css';
import '../../css/d/dv9h9fbnb.css';
import '../../css/m/mbbf06b8y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mlf7ptbhg"/><path class="dv9h9fbnb"/><path class="mbbf06b8y"/></g>`,
		"fallback": "bi:house-lock-fill",
	});
}

export default Component;
