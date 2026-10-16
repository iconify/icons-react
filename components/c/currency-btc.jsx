import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/patw3jb9t.css';
import '../../css/l/ls2mujbyi.css';
import '../../css/k/k1tehvb_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="patw3jb9t"/><path class="ls2mujbyi"/><path class="k1tehvb_k"/></g>`,
		"fallback": "andrsrxn:currency-btc",
	});
}

export default Component;
