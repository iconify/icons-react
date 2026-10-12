import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o7cjddcmb.css';
import '../../css/r/rf7hvkf5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o7cjddcmb"/><path class="rf7hvkf5g"/></g>`,
		"fallback": "andrsrxn:flower",
	});
}

export default Component;
