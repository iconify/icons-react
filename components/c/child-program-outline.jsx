import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/isx6mgsxv.css';
import '../../css/f/fo7gwhhcs.css';
import '../../css/l/lt6a2ib8u.css';
import '../../css/g/gdl6gfbni.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="isx6mgsxv"/><path class="fo7gwhhcs"/><path clip-rule="evenodd" class="lt6a2ib8u"/><path class="gdl6gfbni"/></g>`,
		"fallback": "healthicons:child-program-outline",
	});
}

export default Component;
