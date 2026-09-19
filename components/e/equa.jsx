import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kxg-_j4hs.css';
import '../../css/e/ei75o_bqp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="kxg-_j4hs"/><path class="ei75o_bqp"/></g>`,
		"fallback": "cryptocurrency-color:equa",
	});
}

export default Component;
