import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xnmznwc6q.css';
import '../../css/z/zb4ayzb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xnmznwc6q"/><path class="zb4ayzb_o"/></g>`,
		"fallback": "coolicons:flower-duotone-round",
	});
}

export default Component;
