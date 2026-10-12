import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ruj9_-f6y.css';
import '../../css/q/qaww7g93e.css';
import '../../css/w/wt9ktzjan.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ruj9_-f6y"/><path class="qaww7g93e"/><path class="wt9ktzjan"/></g>`,
		"fallback": "andrsrxn:houses",
	});
}

export default Component;
