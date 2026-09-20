import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mita_xbuw.css';
import '../../css/r/r8_oqnbcm.css';
import '../../css/s/su1i-1q6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mita_xbuw"/><path class="r8_oqnbcm"/><path clip-rule="evenodd" class="su1i-1q6z"/></g>`,
		"fallback": "reicon:donut-filled",
	});
}

export default Component;
