import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ptntrdqpz.css';
import '../../css/i/ivs56nbex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ptntrdqpz"/><path class="ivs56nbex"/></g>`,
		"fallback": "andrsrxn:heart-half",
	});
}

export default Component;
