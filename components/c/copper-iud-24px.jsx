import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ki2r-cc_u.css';
import '../../css/g/g2r7h396f.css';
import '../../css/u/u-st2nb0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ki2r-cc_u"/><path clip-rule="evenodd" class="g2r7h396f"/><path class="u-st2nb0e"/></g>`,
		"fallback": "healthicons:copper-iud-24px",
	});
}

export default Component;
