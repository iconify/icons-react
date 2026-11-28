import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vgzl-bbip.css';
import '../../css/l/l1w2xyb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary vgzl-bbip"/><path class="l1w2xyb_a primary"/></g>`,
		"fallback": "iconaut:gauge-circle-duotone",
	});
}

export default Component;
