import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h32ym5bol.css';
import '../../css/b/b_1d9hcvl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h32ym5bol"/><path class="b_1d9hcvl"/></g>`,
		"fallback": "bi:credit-card-2-front",
	});
}

export default Component;
