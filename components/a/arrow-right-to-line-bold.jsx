import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eyp0q6_-u.css';
import '../../css/f/fxbc1_bcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eyp0q6_-u"/><path class="fxbc1_bcy"/></g>`,
		"fallback": "solar:arrow-right-to-line-bold",
	});
}

export default Component;
