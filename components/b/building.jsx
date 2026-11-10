import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cw65ddb9h.css';
import '../../css/k/kzmzd7bli.css';
import '../../css/q/q7kdw7xge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cw65ddb9h"/><path class="kzmzd7bli"/><path class="q7kdw7xge"/></g>`,
		"fallback": "andrsrxn:building",
	});
}

export default Component;
