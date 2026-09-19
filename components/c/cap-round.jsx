import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z37oq_b8t.css';
import '../../css/j/jfrelvtns.css';
import '../../css/u/u9b1crbyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="z37oq_b8t"/><path class="jfrelvtns"/><path class="u9b1crbyt"/></g>`,
		"fallback": "hugeicons:cap-round",
	});
}

export default Component;
