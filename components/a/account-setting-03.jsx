import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a799yhblt.css';
import '../../css/z/z1pv10l8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="a799yhblt"/><path class="z1pv10l8z"/></g>`,
		"fallback": "hugeicons:account-setting-03",
	});
}

export default Component;
