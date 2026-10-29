import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ucwdobn7c.css';
import '../../css/j/j9e-pqbtc.css';
import '../../css/e/e2ljddclu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ucwdobn7c wm-k"/><path class="j9e-pqbtc wm-k"/><path class="e2ljddclu wm-k"/></g>`,
		"fallback": "withicons-anime:infinity",
	});
}

export default Component;
