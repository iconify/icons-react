import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/n126izq2o.css';
import '../../css/x/x8vt5_b5k.css';
import '../../css/q/q9cbdgbke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="n126izq2o"/><path class="x8vt5_b5k"/><path class="q9cbdgbke"/></g>`,
		"fallback": "hugeicons:gun",
	});
}

export default Component;
