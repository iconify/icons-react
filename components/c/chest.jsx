import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c7xm4xssb.css';
import '../../css/z/z-dku5bwc.css';
import '../../css/q/q0coyobat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c7xm4xssb"/><path class="z-dku5bwc"/><path class="q0coyobat"/></g>`,
		"fallback": "andrsrxn:chest",
	});
}

export default Component;
