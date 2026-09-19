import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z-hezrxbi.css';
import '../../css/e/e-3idzm0b.css';
import '../../css/j/j9bp8xvnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="z-hezrxbi"/><path class="e-3idzm0b"/><path class="j9bp8xvnd"/></g>`,
		"fallback": "hugeicons:ai-innovation-01",
	});
}

export default Component;
