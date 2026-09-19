import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xlhb4cbxr.css';
import '../../css/z/zoslq7bwc.css';
import '../../css/f/fd7qipbux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xlhb4cbxr"/><path class="zoslq7bwc"/><path class="fd7qipbux"/></g>`,
		"fallback": "hugeicons:eye",
	});
}

export default Component;
