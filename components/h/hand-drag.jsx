import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sqacg7phh.css';
import '../../css/k/k00ftcwon.css';
import '../../css/r/rlvsr9brm.css';
import '../../css/h/hejv0bvlo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sqacg7phh"/><path class="k00ftcwon"/><path class="rlvsr9brm"/><path class="hejv0bvlo"/></g>`,
		"fallback": "andrsrxn:hand-drag",
	});
}

export default Component;
