import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zoc_stq5p.css';
import '../../css/r/rin0vjxsc.css';
import '../../css/a/a7ag7p2ad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zoc_stq5p"/><path class="rin0vjxsc"/><path class="a7ag7p2ad"/></g>`,
		"fallback": "andrsrxn:ear-listen",
	});
}

export default Component;
