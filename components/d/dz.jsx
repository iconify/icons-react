import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q0tuw_b0b.css';
import '../../css/y/yn23mu4wr.css';
import '../../css/w/wqgqwwulx.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="q0tuw_b0b"/><path class="yn23mu4wr"/><path class="wqgqwwulx"/></g>`,
		"fallback": "flagpack:dz",
	});
}

export default Component;
