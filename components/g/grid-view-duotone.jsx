import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zuz5-bbxe.css';
import '../../css/y/yoj06j_hl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zuz5-bbxe"/><path class="yoj06j_hl"/></g>`,
		"fallback": "si:grid-view-duotone",
	});
}

export default Component;
