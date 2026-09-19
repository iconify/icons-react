import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kfaxolbkj.css';
import '../../css/p/pg-pw1_lh.css';
import '../../css/n/nn76u1bhz.css';
import '../../css/i/i6q05pbsj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="kfaxolbkj"/><path class="pg-pw1_lh"/><path class="nn76u1bhz"/><path class="i6q05pbsj"/></g>`,
		"fallback": "glyphs:die-outline",
	});
}

export default Component;
