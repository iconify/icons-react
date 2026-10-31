import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xo7xrdb-d.css';
import '../../css/j/j9w1q5btm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xo7xrdb-d"/><path class="j9w1q5btm"/></g>`,
		"fallback": "coolicons:anchor-duotone-round",
	});
}

export default Component;
