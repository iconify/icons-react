import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rt530wbnb.css';
import '../../css/z/zjx49yb7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rt530wbnb"/><path clip-rule="evenodd" class="zjx49yb7n"/></g>`,
		"fallback": "andrsrxn:folder-scan",
	});
}

export default Component;
