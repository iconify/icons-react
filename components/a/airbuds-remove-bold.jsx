import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/thmxfykuu.css';
import '../../css/g/gapqp1bwb.css';
import '../../css/h/hs8q6tbjn.css';
import '../../css/v/vheqg2b0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="thmxfykuu"/><path clip-rule="evenodd" class="gapqp1bwb"/><path class="hs8q6tbjn"/><path clip-rule="evenodd" class="vheqg2b0h"/></g>`,
		"fallback": "solar:airbuds-remove-bold",
	});
}

export default Component;
