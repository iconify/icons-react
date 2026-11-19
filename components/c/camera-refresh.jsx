import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ny9g0lbeb.css';
import '../../css/j/jqgbk1bht.css';
import '../../css/g/g3w3r8s1h.css';
import '../../css/j/j_35edcoh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ny9g0lbeb"/><path class="jqgbk1bht"/><path class="g3w3r8s1h"/><path class="j_35edcoh"/></g>`,
		"fallback": "andrsrxn:camera-refresh",
	});
}

export default Component;
