import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ydsc7p50q.css';
import '../../css/u/ud3yoebqd.css';
import '../../css/f/f4brc0bci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ydsc7p50q"/><path class="ud3yoebqd"/><path class="f4brc0bci"/></g>`,
		"fallback": "andrsrxn:bank-note",
	});
}

export default Component;
