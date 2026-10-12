import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dw2x-fupm.css';
import '../../css/e/e5wi7ib-h.css';
import '../../css/s/slhwxmo-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dw2x-fupm"/><path class="e5wi7ib-h"/><path class="slhwxmo-h"/></g>`,
		"fallback": "andrsrxn:file-in",
	});
}

export default Component;
