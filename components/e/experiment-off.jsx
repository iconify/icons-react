import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cz_gpjb-q.css';
import '../../css/u/u92osielr.css';
import '../../css/m/m3ayyhbrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cz_gpjb-q"/><path class="u92osielr"/><path class="m3ayyhbrb"/></g>`,
		"fallback": "andrsrxn:experiment-off",
	});
}

export default Component;
