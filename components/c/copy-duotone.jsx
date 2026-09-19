import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q2n8jx9ri.css';
import '../../css/i/i0dey_bnm.css';
import '../../css/q/qqm0x8h7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q2n8jx9ri"/><path class="i0dey_bnm"/><path class="qqm0x8h7d"/></g>`,
		"fallback": "iconamoon:copy-duotone",
	});
}

export default Component;
