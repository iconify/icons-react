import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ai9-1czxf.css';
import '../../css/x/xf5d8fb4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ai9-1czxf"/><path class="xf5d8fb4r"/></g>`,
		"fallback": "andrsrxn:airplane-mode-off",
	});
}

export default Component;
