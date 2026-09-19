import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d_7918rpi.css';
import '../../css/s/sssc3sb_u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d_7918rpi"/><path class="sssc3sb_u"/></g>`,
		"fallback": "bi:clouds-fill",
	});
}

export default Component;
