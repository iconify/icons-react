import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e18j-rbjv.css';
import '../../css/m/maqcvtbhy.css';
import '../../css/q/qvyq7ub-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e18j-rbjv"/><path class="maqcvtbhy"/><path class="qvyq7ub-u"/></g>`,
		"fallback": "solar:file-remove-bold-duotone",
	});
}

export default Component;
