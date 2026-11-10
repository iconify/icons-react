import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oeb77jooy.css';
import '../../css/j/j0k04pfiu.css';
import '../../css/x/x8vflsbdx.css';
import '../../css/k/kkx07_bvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oeb77jooy"/><path class="j0k04pfiu"/><path class="x8vflsbdx"/><path class="kkx07_bvc"/></g>`,
		"fallback": "andrsrxn:chart-bar-horizontal",
	});
}

export default Component;
