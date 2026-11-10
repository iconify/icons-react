import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xn41k6blx.css';
import '../../css/x/x--ff12fu.css';
import '../../css/q/qndpc0bfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xn41k6blx"/><path class="x--ff12fu"/><path class="qndpc0bfl"/></g>`,
		"fallback": "andrsrxn:code-square",
	});
}

export default Component;
