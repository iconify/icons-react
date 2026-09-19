import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rzh-sbc7e.css';
import '../../css/k/k5pnk_bcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rzh-sbc7e"/><path class="k5pnk_bcp"/></g>`,
		"fallback": "iconamoon:headphone-bold",
	});
}

export default Component;
