import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bsqcx5b8k.css';
import '../../css/e/ev0othsrk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bsqcx5b8k"/><path clip-rule="evenodd" class="ev0othsrk"/></g>`,
		"fallback": "streamline-plump-color:dumbell-flat",
	});
}

export default Component;
