import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tgjvbd2-r.css';
import '../../css/q/qke8bxe0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tgjvbd2-r"/><path class="qke8bxe0e"/></g>`,
		"fallback": "andrsrxn:gauge",
	});
}

export default Component;
