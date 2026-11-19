import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xamrqobjx.css';
import '../../css/a/awg4b9bvp.css';
import '../../css/j/jnn9t9hnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xamrqobjx"/><path class="awg4b9bvp"/><path class="jnn9t9hnd"/></g>`,
		"fallback": "andrsrxn:cloud-reload",
	});
}

export default Component;
