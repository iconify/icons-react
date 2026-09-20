import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rp-rncc0y.css';
import '../../css/m/mt58vcclw.css';
import '../../css/h/h_mjq-bfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rp-rncc0y"/><path class="mt58vcclw"/><path clip-rule="evenodd" class="h_mjq-bfb"/></g>`,
		"fallback": "reicon:draw-compass-filled",
	});
}

export default Component;
