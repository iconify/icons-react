import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d5aksgb7v.css';
import '../../css/p/pppk-eq6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="d5aksgb7v"/><path class="pppk-eq6s"/></g>`,
		"fallback": "nrk:ai-expressive",
	});
}

export default Component;
