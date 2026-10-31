import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/toskpsvsh.css';
import '../../css/j/j_w8y1b_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="toskpsvsh"/><path class="j_w8y1b_f"/></g>`,
		"fallback": "coolicons:golf-duotone-round",
	});
}

export default Component;
