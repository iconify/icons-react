import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iti8b_hwb.css';
import '../../css/s/s-nia3bpx.css';
import '../../css/x/xf8712kfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iti8b_hwb"/><path class="s-nia3bpx"/><path class="xf8712kfs"/></g>`,
		"fallback": "hugeicons:clipboard-pen-line",
	});
}

export default Component;
