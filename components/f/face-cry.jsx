import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/na3nwbb0o.css';
import '../../css/o/op9e02b7c.css';
import '../../css/p/p7svkwbgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="na3nwbb0o"/><path class="op9e02b7c"/><path class="p7svkwbgf"/></g>`,
		"fallback": "andrsrxn:face-cry",
	});
}

export default Component;
